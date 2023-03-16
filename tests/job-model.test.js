const jobModel = require("../server/models/job-model");
const db = require("../server/db/index");

describe("Test for posting new job", () => {
    const TITLE= "RN Clinical Nurse";
    const COMPANY_NAME= "Johns Hopkins Medicine";
    const LOCATION= "Baltimore, MD";
    const JOB_TYPE= "Full Time";
    const DESCRIPTION= "Current registered nurse license in the state of Maryland, or licensed in a compact state.  Current CPR certification.  2 years of recent nursing experience";
    const IS_AVAILABLE= true;
    const CONTACT_NAME= "Mary Johnson '78";
    const CONTACT_INF0= "mjohnson@gmail.com";

    beforeEach(async () => {
        await db.connect();
    });

    afterEach(async () => {
        await db.connection.close();
    });


    test("New job successfully created", async function() {
        let newJobSuccess = {
            title: TITLE,
            companyName: COMPANY_NAME,
            location: LOCATION,
            jobType: JOB_TYPE,
            description: DESCRIPTION,
            isAvailable: IS_AVAILABLE,
            contactName: CONTACT_NAME,
            contactInfo: CONTACT_INF0
        }

        expect(newJobSuccess.title).toBe(TITLE);
        expect(newJobSuccess.companyName).toBe(COMPANY_NAME);
        expect(newJobSuccess.location).toBe(LOCATION);
        expect(newJobSuccess.jobType).toBe(JOB_TYPE);
        expect(newJobSuccess.description).toBe(DESCRIPTION);
    });
});

