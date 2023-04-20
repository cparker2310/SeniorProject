import app from '../index'
const request = require("supertest");

beforeEach(() => {

})

afterEach(async () => {
    let res = await request(app).get('/api/users');
    let id = res.body[res.body.length-1]._id
    res = await request(app).delete('/api/user/'+id);
})

afterAll(()=>{
    app.close()
})

test('getAllUsers', async() => {
    const user = {
        firstName: 'Johnna',
        maidenName: 'Morgan',
        classYear: '2012',
        email: 'john.doe@example.com',
        password: 'secret'
        
      };
      
    let res = await request(app)
        .post('/api/user')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(user));

    res = await request(app).get('/api/users');
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    
})

test('getByID', async() => {
    
    const user = {
        firstName: 'Johnna',
        maidenName: 'Morgan',
        classYear: '2012',
        email: 'john.doe@example.com',
        password: 'secret'
        
      };
      
    let res = await request(app)
        .post('/api/user')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(user));

    res = await request(app).get('/api/users');
    let id = res.body[res.body.length-1]._id
    res = await request(app).get('/api/user/' + id);
    expect(res.status).toBe(200)
})

test('create user', async () =>{
    const user = {
        firstName: 'Johnna',
        maidenName: 'Morgan',
        classYear: '2012',
        email: 'john.doe@example.com',
        password: 'secret'
        
      };
      
      const res = await request(app)
        .post('/api/user')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(user));
        
      expect(res.status).toBe(200);
      expect(res.body.firstName).toBe(user.firstName);
      expect(res.body.email).toBe(user.email);
      expect(res.body.password).toBe(user.password);
})

test('update user', async () =>{
    const user = {
        firstName: 'Johnna',
        maidenName: 'Morgan',
        classYear: '2012',
        email: 'john.doe@example.com',
        password: 'secret'
        
      };
      
    let res = await request(app)
        .post('/api/user')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(user));

    res = await request(app).get('/api/users');
    let id = res.body[res.body.length-1]._id
    res = await request(app).get('/api/user/' + id);
    expect(res.status).toBe(200)


    const updated = {
        firstName: 'Molly',
        maidenName: 'Mae',
        classYear: '2012',
        email: 'john.doe@example.com',
        password: 'secret'
        
      };
    res = await request(app)
        .put('/api/user/'+id)
        .send(updated);
    expect(res.status).toBe(200)
    res = await request(app).get('/api/user/' + id);
    expect(res.status).toBe(200)
    expect(res.body.firstName).toBe(updated.firstName);
    expect(res.body.maidenName).toBe(updated.maidenName);
})

test('delete user', async () => {

    const user = {
        firstName: 'Johnna',
        maidenName: 'Morgan',
        classYear: '2012',
        email: 'john.doe@example.com',
        password: 'secret'
        
      };
      
    res = await request(app)
        .post('/api/user')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(user));

    res = await request(app)
        .post('/api/user')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(user));

    let res = await request(app).get('/api/users');
    let id = res.body[res.body.length-1]._id
    res = await request(app).delete('/api/user/'+id);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined()
})


