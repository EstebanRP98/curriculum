import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Empleo } from '../../model/empleo';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleosService {
  constructor(private afs: AngularFirestore) { }

  getEmpleos(): Observable<any[]> {
    return this.afs.collection('empleos').valueChanges();
  }
  getEmpleo(uid: string): Observable<Empleo> {
    let itemDoc = this.afs.doc<any>(`empleos/${uid}`);
    return itemDoc.valueChanges();
  }


async getEmpleoById2(uid: string): Promise<Empleo> {
  try {
      let aux: any = await this.afs.collection('empleos',
          ref => ref.where('uid', '==', uid))
                    .valueChanges().pipe(first()).toPromise().then(doc => {
                        return doc;
                    }).catch(error => {
                        throw error;
                    });
      if (aux.length === 0) {
          return undefined;
      }
      return aux[0];
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}

  insertEmpleo(empleo: Empleo){
    const refEmpleo = this.afs.collection('empleos');
    empleo.uid = this.afs.createId();
    const param = JSON.parse(JSON.stringify(empleo));
    refEmpleo.doc(empleo.uid).set(param, {merge: true});
  }

  editarEmpleo(empleo: Empleo) {
    const refEmpleo = this.afs.collection('empleos');
    const param = JSON.parse(JSON.stringify(empleo));
    refEmpleo.doc(empleo.uid).set(param, {merge: true});
  }

  deleteEmpleo(uid: string){
    return this.afs.doc<any>(`empleos/${uid}`).delete();
  }

  async saveEmpleado2(empleo: Empleo) {
    let uidEmpleo = this.afs.createId();
    let refCount = this.afs.firestore.collection("params").doc("secuencias");
    let refEmpleo = this.afs.firestore.collection("empleos").doc(uidEmpleo);

    return await this.afs.firestore
      .runTransaction(async transaction => {
        const doc = await transaction.get(refCount);

        let newEmpleoNumber = 1;
        // Si este no existe crea el registro con un valor inicial
        if (!doc.exists) {
          transaction.set(refCount, { empleoNumber: newEmpleoNumber });
        }else{
          //Si existe incrementa este en 1
          newEmpleoNumber = doc.data().empleoNumber + 1;
          transaction.update(refCount, {
            empleoNumber: newEmpleoNumber
          });
        }

        empleo.uid = uidEmpleo;//this.afs.createId();
        empleo.numero = newEmpleoNumber;

        //const param = JSON.parse(JSON.stringify(empleo));
        //transaction.set(refEmpleo, param);

        transaction.set(refEmpleo, Object.assign({}, empleo));

        // retorna el nuevo secuencial del registro ingresado
        return newEmpleoNumber;
      })
      .then(empleoNumber => {
        return empleoNumber;
      })
      .catch(error => {
        console.error("Error", JSON.stringify(error));
        throw error;
      });
  }

}
