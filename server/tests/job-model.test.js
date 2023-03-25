const Job= require('../server/models/job-model');
import { connect, connection } from "../server/db/index";

describe("Test for posting new job", () => {
    it('Database should save the new job', async done => {
        const res= await resquest.post('/job')
        .send({
            title: "RN Clinical Nurse",
            companyName: "Johns Hopkins Medicine",
            location: "Baltimore, MD",
            jobType: "Full Time",
            description: "Current registered nurse license in the state of Maryland, or licensed in a compact state.  Current CPR certification.  2 years of recent nursing experience",
            isAvailable: true,
            contactName: "Mary Johnson '78",
            contactInfo: "mjohnson@gmail.com"
        });

        const job= await Job.findOne({title: "RN Clinical Nurse"});
        
        expect(job.title).toBeTruthy();
        expect(job.companyName).toBeTruthy();
        expect(job.location).toBeTruthy();
        expect(job.jobType).toBeTruthy();
        expect(job.description).toBeTruthy();
        expect(job.isAvailable).toBeTruthy();
        expect(job.contactName).toBeTruthy();
        expect(job.contactInfo).toBeTruthy();

        done();
    })

    beforeEach(async () => {
        await connect();
    });

    afterEach(async () => {
        await connection.close();
    });
});

