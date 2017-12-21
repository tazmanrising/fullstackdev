import { Injectable } from '@angular/core'
//import { Subject, Observable } from 'rxjs/Rx'
//import { Config } from '../Config';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http'
import { Request } from '../request'
import { Subject } from 'rxjs/RX'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './event.model'
import { IEvent } from './event.model'

@Injectable()
export class EventService {

    private _url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,EOS,DASH&tsyms=USD'
    private _productUrl = 'api/products/products.json';

    constructor(
        private http: Http,
        private Request: Request) { }



    getProducts(): Observable<IProduct[]> {
        return this.http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))  // do operator to peek
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


    //  getEvent(id:number):IEvent{
    //     // do an ajax call later on , for now 
    //     return eventListing.find(event => event.id === id)
    // }
    // new for routing to 1 event
    getEvent(id:number){
        // do an ajax call later on , for now
        return eventListing.find(event => event.id === id)
    }


    getEvents(){ //:Subject<IEvent[]> {

        // OLD PROMISE way
        // this.Request.get("/user").then(response => {
        //     console.log("Got response:", response);
        // }).catch(error => {
        //     console.log("Got error:", error);
        // }).then(response => {
        //     console.log("Another response:", response);
        // }).catch(error => {
        //     console.log("Got another error:", error);
        // });

        //  getCoins(): Observable<IEvent[]> {
        //    return this.http.get(this._url)
        //         .map((response: Response) => <IEvent[]>response.json());
        //     //console.log('b',b)
        //  }
        var url = "https://conduit.productionready.io/api/profiles/eric";
        var blah = [];
        this.getDataObservable(url).subscribe(
            data => {
                blah = data;
                //console.log("I CANT SEE DATA HERE: ", blah);
            }
        );



        this.getCoins().subscribe(
            data => {
                blah = data;
                //console.log('subscriber coins', blah)
            }
        )

        //will be changing to ajax call
        //console.log('try')

        return eventListing

        // let subject = new Subject<IEvent[]>()
        // setTimeout(() => {subject.next(eventListing); subject.complete(); },
        // 100)
        // return subject

    }

    //getCoins(_url: string){

    //WORKS
    getCoins() {
        return this.http.get(this._url)
            .map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))  // do operator to peek
            .catch(this.handleError);
    }

    //WORKS
    zgetCoins() {
        console.log('about to..', this._url)

        return this.http.get(this._url)
            .map(data1 => {
                data1.json()
                console.log('coins', JSON.stringify(data1))
            })
            //.do(data => console.log('All: ' + JSON.stringify(data)))  // do operator to peek
            .catch(error => Observable.throw(error))
    }

    //do not have an interface
    xgetCoins(): Observable<IProduct[]> {
        return this.http.get(this._url)
            .map((response: Response) => <IProduct[]>response.json());
        //console.log('b',b)
    }



    getDataObservable(url: string) {
        return this.http.get(url)
            .map(data => {
                data.json();
                console.log('test', data)
            })
            .catch(error => Observable.throw(error));
    }

    xgetDataObservable(url: string) {
        return this.http.get(url)
            .map(data => {
                data.json();
                // the console.log(...) line prevents your code from working
                // either remove it or add the line below (return ...)
                console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();
            });
    }

    getUser() {
        console.log(this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
            .map((res: Response) => res.json()));
    }

    // xgetEvents():Observable<IEvent[]>{

    // }

}

//const eventListing = [
const eventListing:IEvent[] = [
    {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        },
        sessions: [
            {
                id: 1,
                name: "Using Angular 4 Pipes",
                presenter: "Peter Bacon Darwin",
                duration: 1,
                level: "Intermediate",
                abstract: `Learn all about the new pipes in Angular 4, both
          how to write them, and how to get the new AI CLI to write
          them for you. Given by the famous PBD, president of Angular
          University (formerly Oxford University)`,
                voters: ['bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 2,
                name: "Getting the most out of your dev team",
                presenter: "Jeff Cross",
                duration: 1,
                level: "Intermediate",
                abstract: `We all know that our dev teams work hard, but with
          the right management they can be even more productive, without
          overworking them. In this session I'll show you how to get the
          best results from the talent you already have on staff.`,
                voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 3,
                name: "Angular 4 Performance Metrics",
                presenter: "Rob Wormald",
                duration: 2,
                level: "Advanced",
                abstract: `Angular 4 Performance is hot. In this session, we'll see
          how Angular gets such great performance by preloading data on
          your users devices before they even hit your site using the
          new predictive algorithms and thought reading software
          built into Angular 4.`,
                voters: []
            },
            {
                id: 4,
                name: "Angular 5 Look Ahead",
                presenter: "Brad Green",
                duration: 2,
                level: "Advanced",
                abstract: `Even though Angular 5 is still 6 years away, we all want
          to know all about it so that we can spend endless hours in meetings
          debating if we should use Angular 4 or not. This talk will look at
          Angular 6 even though no code has yet been written for it. We'll
          look at what it might do, and how to convince your manager to
          hold off on any new apps until it's released`,
                voters: []
            },
            {
                id: 5,
                name: "Basics of Angular 4",
                presenter: "John Papa",
                duration: 2,
                level: "Beginner",
                abstract: `It's time to learn the basics of Angular 4. This talk
          will give you everything you need to know about Angular 4 to
          get started with it today and be building UI's for your self
          driving cars and butler-bots in no time.`,
                voters: ['bradgreen', 'igorminar']
            }
        ]
    },
    {
        id: 2,
        name: 'ng-nl',
        date: new Date('9/26/2036'),
        time: '9:00 am',
        price: 950.00,
        imageUrl: '/app/assets/images/ng-nl.png',
        onlineUrl: 'http://ng-nl.org/',
        sessions: [
            {
                id: 1,
                name: "Testing Angular 4 Workshop",
                presenter: "Pascal Precht & Christoph Bergdorf",
                duration: 4,
                level: "Beginner",
                abstract: `In this 6 hour workshop you will learn not only how to test Angular 4,
          you will also learn how to make the most of your team's efforts. Other topics
          will be convincing your manager that testing is a good idea, and using the new
          protractor tool for end to end testing.`,
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "Angular 4 and Firebase",
                presenter: "David East",
                duration: 3,
                level: "Intermediate",
                abstract: `In this workshop, David East will show you how to use Angular with the new
          ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.`,
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            },
            {
                id: 3,
                name: "Reading the Angular 4 Source",
                presenter: "Patrick Stapleton",
                duration: 2,
                level: "Intermediate",
                abstract: `Angular 4's source code may be over 25 million lines of code, but it's really
          a lot easier to read and understand then you may think. Patrick Stapleton will talk
          about his secretes for keeping up with the changes, and navigating around the code.`,
                voters: ['martinfowler']
            },
            {
                id: 4,
                name: "Hail to the Lukas",
                presenter: "Lukas Ruebbelke",
                duration: 1,
                level: "Beginner",
                abstract: `In this session, Lukas will present the
          secret to being awesome, and how he became the President
          of the United States through his amazing programming skills,
          showing how you too can be success with just attitude.`,
                voters: ['bradgreen']
            },
        ]
    },
    {
        id: 3,
        name: 'ng-conf 2037',
        date: new Date('9/26/2036'),
        time: '9:00 am',
        price: 759.00,
        imageUrl: '/app/assets/images/ng-conf.png',
        location: {
            address: 'The Palatial America Hotel',
            city: 'Salt Lake City',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "How Elm Powers Angular 4",
                presenter: "Murphy Randle",
                duration: 2,
                level: "Intermediate",
                abstract: `We all know that Angular is written in Elm, but did you
          know how the source code is really written? In this exciting look
          into the internals of Angular 4, we'll see exactly how Elm powers
          the framework, and what you can do to take advantage of this knowledge.`,
                voters: ['bradgreen', 'martinfowler', 'igorminar']
            },
            {
                id: 2,
                name: "Angular and React together",
                presenter: "Jamison Dance",
                duration: 2,
                level: "Intermediate",
                abstract: `React v449.6 has just been released. Let's see how to use
          this new version with Angular to create even more impressive applications.`,
                voters: ['bradgreen', 'martinfowler']
            },
            {
                id: 3,
                name: "Redux Woes",
                presenter: "Rob Wormald",
                duration: 1,
                level: "Intermediate",
                abstract: `Everyone is using Redux for everything from Angular to React to
          Excel macros, but you're still having trouble grasping it? We'll take a look
          at how farmers use Redux when harvesting grain as a great introduction to
          this game changing technology.`,
                voters: ['bradgreen', 'martinfowler', 'johnpapa']
            },
            {
                id: 4,
                name: "ng-wat again!!",
                presenter: "Shai Reznik",
                duration: 1,
                level: "Beginner",
                abstract: `Let's take a look at some of the stranger pieces of Angular 4,
          including neural net nets, Android in Androids, and using pipes with actual pipes.`,
                voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
            },
            {
                id: 5,
                name: "Dressed for Success",
                presenter: "Ward Bell",
                duration: 2,
                level: "Beginner",
                abstract: `Being a developer in 2037 is about more than just writing bug-free code.
          You also have to look the part. In this amazing expose, Ward will talk you through
          how to pick out the right clothes to make your coworkers and boss not only
          respect you, but also want to be your buddy.`,
                voters: ['bradgreen', 'martinfowler']
            },
            {
                id: 6,
                name: "These aren't the directives you're looking for",
                presenter: "John Papa",
                duration: 2,
                level: "Intermediate",
                abstract: `Coinciding with the release of Star Wars Episode 18, this talk will show how
          to use directives in your Angular 4 development while drawing lessons from the new movie,
          featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.`,
                voters: ['bradgreen', 'martinfowler']
            },
        ]
    },
    {
        id: 4,
        name: 'UN Angular Summit',
        date: new Date('9/26/2036'),
        time: '8:00 am',
        price: 800.00,
        imageUrl: '/app/assets/images/basic-shield.png',
        location: {
            address: 'The UN Angular Center',
            city: 'New York',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "Diversity in Tech",
                presenter: "Sir Dave Smith",
                duration: 2,
                level: "Beginner",
                abstract: `Yes, we all work with cyborgs and androids and Martians, but
          we probably don't realize that sometimes our internal biases can make it difficult for
          these well-designed coworkers to really feel at home coding alongside us. This talk will
          look at things we can do to recognize our biases and counteract them.`,
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "World Peace and Angular",
                presenter: "US Secretary of State Zach Galifianakis",
                duration: 2,
                level: "Beginner",
                abstract: `Angular has been used in most of the major peace brokering that has
          happened in the last decade, but there is still much we can do to remove all
          war from the world, and Angular will be a key part of that effort.`,
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            },
            {
                id: 3,
                name: "Using Angular with Androids",
                presenter: "Dan Wahlin",
                duration: 3,
                level: "Advanced",
                abstract: `Androids may do everything for us now, allowing us to spend all day playing
          the latest Destiny DLC, but we can still improve the massages they give and the handmade
          brie they make using Angular 4. This session will show you how.`,
                voters: ['igorminar', 'johnpapa']
            },
        ]
    },
    {
        id: 5,
        name: 'ng-vegas',
        date: new Date('9/26/2036'),
        time: '9:00 am',
        price: 400.00,
        imageUrl: '/app/assets/images/ng-vegas.png',
        location: {
            address: 'The Excalibur',
            city: 'Las Vegas',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "Gambling with Angular",
                presenter: "John Papa",
                duration: 1,
                level: "Intermediate",
                abstract: `No, this talk isn't about slot machines. We all know that
          Angular is used in most waiter-bots and coke vending machines, but
          did you know that was also used to write the core engine in the majority
          of voting machines? This talk will look at how all presidential elections
          are now determined by Angular code.`,
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "Angular 4 in 60ish Minutes",
                presenter: "Dan Wahlin",
                duration: 2,
                level: "Beginner",
                abstract: `Get the skinny on Angular 4 for anyone new to this great new technology.
          Dan Wahlin will show you how you can get started with Angular in 60ish minutes,
          guaranteed!`,
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            }
        ]
    }
]
