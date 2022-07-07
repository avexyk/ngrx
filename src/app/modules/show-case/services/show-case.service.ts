import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {


  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "Pudgy Penguin #1",
        price: 0.2,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg"
      },
      {
        name: "Pudgy Penguin #2",
        price: 0.1,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg"
      },
      {
        name: "Pudgy Penguin #3",
        price: 0.3,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg"
      },
      {
        name: "Pudgy Penguin #4",
        price: 0.4,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg"
      },
      {
        name: "Pudgy Penguin #5",
        price: 0.5,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xjJU6rwzLX7Jk8HFQfVW6H5guMC.jpg"
      },
      {
        name: "Pudgy Penguin #6",
        price: 0.6,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg"
      },
      {
        name: "Pudgy Penguin #7",
        price: 0.7,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg"
      },
      {
        name: "Pudgy Penguin #8",
        price: 0.8,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5E3Hvbu0bg38ouYf6chGftVGqZ7.jpg"
      },
      {
        name: "Pudgy Penguin #9",
        price: 0.9,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg"
      },
      {
        name: "Pudgy Penguin #10",
        price: 0.9,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wTGuHmMIBBgKakY80J1D52VvQKI.jpg"
      },
      {
        name: "Pudgy Penguin #11",
        price: 0.9,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
      },
      {
        name: "Pudgy Penguin #12",
        price: 0.9,
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/avPMO5cnaGHgLaNiAIhy33WoQLm.jpg"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }



}
