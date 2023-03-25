const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server/index');
const User = require('../server/controllers/user-ctrl');

beforeAll(async () => {
  await mongoose.connect('mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/maryvale_temp', { useNewUrlParser: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('User controller', () => {
    let user;

    beforeEach(async () => {
        user = new User({
            firstName: 'Mia',
            maidenName: 'Doe',
            marriedName: 'Brown',
            classYear: '2008',
            currentCity: 'Arlington',
            currentState: 'Virginia',
            universityName: 'Marymount University',
            degree: 'Bachelor of Science',
            areaStudy: 'Nursing',
            gradYear: '2012',
            position: 'Registered Nurse',
            companyName: 'Virginia Hospital Center',
            industry: 'Medical',
            phone: '443-566-3189',
            email: 'miabrown08@gmail.com',
            password: 'mypass123'
        });

        await user.save();
    });

    afterEach(async () => {
        await User.deleteMany({});
    });

    describe('GET /users', () => {
        it('should display all users', async () => {
            const res = await request(app).get('/users');
            expect(res.body.length).toEqual(1);

            expect(user.firstName).toBeTruthy();
            expect(user.maidenName).toBeTruthy();
            expect(user.marriedName).toBeTruthy();
            expect(user.classYear).toBeTruthy();
            expect(user.currentCity).toBeTruthy();
            expect(user.currentState).toBeTruthy();
            expect(user.universityName).toBeTruthy();
            expect(user.degree).toBeTruthy();
            expect(user.areaStudy).toBeTruthy();
            expect(user.gradYear).toBeTruthy();
            expect(user.position).toBeTruthy();
            expect(user.companyName).toBeTruthy();
            expect(user.industry).toBeTruthy();
            expect(user.phone).toBeTruthy();
            expect(user.email).toBeTruthy();
            expect(user.password).toBeTruthy();

        });
    });

    describe('GET /users/:id', () => {
        it('should retrieve a user by id', async () => {
            const res = await request(app).get(`/users/${user._id}`);
            expect(res.statusCode).toEqual(200);
        });

    });

    describe('POST /users', () => {
        it('should create a new user', async () => {
        const newUser = {
                firstName: 'Mia',
                maidenName: 'Doe',
                marriedName: 'Brown',
                classYear: '2008',
                currentCity: 'Arlington',
                currentState: 'Virginia',
                universityName: 'Marymount University',
                degree: 'Bachelor of Science',
                areaStudy: 'Nursing',
                gradYear: '2012',
                position: 'Registered Nurse',
                companyName: 'Virginia Hospital Center',
                industry: 'Medical',
                phone: '443-566-3189',
                email: 'miabrown08@gmail.com',
                password: 'mypass123',
                isAdmin: false
        };

        const res = await request(app).post('/users').send(newUser);
        expect(res.statusCode).toEqual(201);
        });

    });

    describe('PUT /users/:id', () => {
        it('should update an existing user', async () => {
        const updatedUser = {
            firstName: 'Mia',
            maidenName: 'Doe',
            marriedName: 'Brown',
            classYear: '2008',
            currentCity: 'Arlington',
            currentState: 'Virginia',
            universityName: 'Marymount University',
            degree: 'Bachelor of Science',
            areaStudy: 'Nursing',
            gradYear: '2012',
            position: 'Registered Nurse',
            companyName: 'Virginia Hospital Center',
            industry: 'Medical',
            phone: '443-566-3189',
            email: 'miabrown08@gmail.com',
            password: 'mypass123'
        };
        const res = await request(app).send(updatedUser);
        expect(res.statusCode).toEqual(400);
        });
    });

    describe('DELETE /users/:id', () => {
        it('should delete a user by id', async () => {
            const res = await request(app).delete(`/users/${user._id}`);
            expect(res.statusCode).toEqual(200);
        });
    });

});