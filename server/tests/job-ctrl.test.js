import app from '../index'
const request = require("supertest");

beforeEach(() => {

})

afterEach(async () => {
    let res = await request(app).get('/api/jobs');
    let id = res.body[res.body.length-1]._id
    res = await request(app).delete('/api/job/'+id);
})

afterAll(()=>{
    app.close()
})

test('getAllJobs', async() => {
    const job = {
        author_id: 'fake id',
        title: 'job posting',
        type: 'Internship',
        companyName: 'company',
        description: 'working for me',
        location: 'Remote',
        contactName: 'Christian',
        contactInfo: '610......'
      };

      
    let res = await request(app)
        .post('/api/job')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(job));

    res = await request(app).get('/api/jobs');
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    
})

test('getByID', async() => {
    
    const job = {
        author_id: 'fake id',
        title: 'job posting',
        type: 'Internship',
        companyName: 'company',
        description: 'working for me',
        location: 'Remote',
        contactName: 'Christian',
        contactInfo: '610......'
      };
      
    let res = await request(app)
        .post('/api/job')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(job));

    res = await request(app).get('/api/jobs');
    let id = res.body[res.body.length-1]._id
    res = await request(app).get('/api/job/' + id);
    expect(res.status).toBe(200)
})

test('create job', async () =>{
    const job = {
        author_id: 'fake id',
        title: 'job posting',
        type: 'Internship',
        companyName: 'company',
        description: 'working for me',
        location: 'Remote',
        contactName: 'Christian',
        contactInfo: '610......'
      };
      
      const res = await request(app)
        .post('/api/job')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(job));
        
      expect(res.status).toBe(200);
      //expect(res.body.author_id).toBe(job.author_id);
      expect(res.body.description).toBe(job.description);
      expect(res.body.contactName).toBe(job.contactName);
})

test('update job', async () =>{
    const job = {
        author_id: 'fake id',
        title: 'job posting',
        type: 'Internship',
        companyName: 'company',
        description: 'working for me',
        location: 'Remote',
        contactName: 'Christian',
        contactInfo: '610......'
      };
      
    let res = await request(app)
        .post('/api/job')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(job));

    res = await request(app).get('/api/jobs');
    let id = res.body[res.body.length-1]._id
    res = await request(app).get('/api/job/' + id);
    expect(res.status).toBe(200)


    const updated = {
        author_id: 'new_id',
        title: 'updated posting',
        type: 'Internship',
        companyName: 'company',
        description: 'working for me',
        location: 'Remote',
        contactName: 'Christian',
        contactInfo: '610......'
      };

    res = await request(app)
        .put('/api/job/'+id)
        .send(updated);

    expect(res.status).toBe(200)
    res = await request(app).get('/api/job/' + id);
    expect(res.status).toBe(200)
    expect(res.body.title).toBe(updated.title);
    expect(res.body.type).toBe(updated.type);
})

test('delete job', async () => {

    const job = {
        author_id: 'fake id',
        title: 'job posting',
        type: 'Internship',
        companyName: 'company',
        description: 'working for me',
        location: 'Remote',
        contactName: 'Christian',
        contactInfo: '610......'
      };
      
    res = await request(app)
        .post('/api/job')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(job));

    res = await request(app)
        .post('/api/job')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(job));

    let res = await request(app).get('/api/jobs');
    let id = res.body[res.body.length-1]._id
    res = await request(app).delete('/api/job/'+id);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined()
})


