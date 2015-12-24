export default function() {

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
  this.get('/list', function() {
    return {
      data: [{
        type: 'bugs',
        id: 1,
        attributes: {
          bugDescription: 'Super buggy bug',
          stepsToReproduce: '1. open software 2. see bug',
          expectedBehavior: 'not see a bug when the software is open',
          observedBehavior: 'it shows a clear bug in the middle of the screen',
          imageURL: '',
          assignedTo: 'Jean',
          isFixed: true
        }
      }, {
        type: 'bugs',
        id: 2,
        attributes: {
          bugDescription: 'Mr Skeltal in my game',
          stepsToReproduce: '1. open game 2. check mr skeltal',
          expectedBehavior: 'mr skeltal shouldn\'t be there',
          observedBehavior: 'a mr skeltal like in the image',
          imageURL: 'http://www.cinemablend.com/images/sections/69159/Funniest_Video_Game_Bugs_69159.jpg',
          assignedTo: 'Mr. Skeltal',
          isFixed: false
        }
      }, {
        type: 'bugs',
        id: 3,
        attributes: {
          bugDescription: 'Computer room is on fire',
          stepsToReproduce: '1. go to main room 2. observe fire',
          expectedBehavior: 'expected not fire',
          observedBehavior: 'red fire with lots of smoke',
          imageURL: 'https://i.ytimg.com/vi/y_pwBQuINSA/maxresdefault.jpg',
          assignedTo: 'firefighter (any)',
          isFixed: false
        }
      }, {
        type: 'bugs',
        id: 4,
        attributes: {
          bugDescription: 'Computer room extinguisher does not work properly',
          stepsToReproduce: '1. go to room on fire (see bug #3) 2. observe fire 3. try using extinguisher',
          expectedBehavior: 'expected to properly release water',
          observedBehavior: 'extinguisher is on fire',
          imageURL: 'http://thenerderypublic.com/wp-content/uploads/2015/09/fire.jpg',
          assignedTo: 'firefighter (any) or extinguisher\'s support',
          isFixed: false
        }
      }]
    };
  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
