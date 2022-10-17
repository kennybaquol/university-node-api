# Unviersity Node API
A university is looking to build software that enables them to maintain details about their students,
faculty, courses, course schedules, and student grades and major/minor progress.
Phase 1 of the project is to build a RESTful API to maintain all personal student data.

## Client Requirements (Phase 1)
- [X] No UI is necessary, only API endpoints
- [X] RESTful CRUD endpoints must be available for the Student model
- [X] Must have an endpoint to perform searches for students based on full name
- [X] Data must be persisted to a database 
- [X] The Student model includes the following fields:
    - [X] First name
    - [X] Last name
    - [X] Date of birth
    - [X] Home address
    - [X] Enrollment status
    - [X] Enrollment date
- [X] All endpoints must require an API Key to authenticate against the API and gain access to its resources
    - [X] If a request is unauthenticated, a 401 HTTP status code is returned
- [ ] All endpoint responses must have the HTTP Response Header "x-organization" with the value of "Skyline"
    - [] e.g. x-organization: Skyline

## Route/Endpoint Table:
| **URL**          | **HTTP Verb**|**Action**|
|----------------------|--------------|----------|
| /students              | GET          | index  
| /students/new          | GET          | new      
| /students              | POST         | create    
| /students/:id          | GET          | show   
| /students/:id/edit     | GET          | edit
| /students/:id/delete   | GET          | get (search)     
| /students/:id          | PUT          | update    
| /students/:id          | DELETE       | delete   
| /students/search/:name | GET          | get (search)   

## Potential Shortcomings / Icebox
- [ ] Certain incorrect URL syntax/ordering causes local server to crash - need to test on deployed server
- [ ] Need to implement a date-picker input element on the New and Edit forms so that format errors can't occur for dates
- [ ] Needs a way to assign student IDs without the possibility of duplicates
- [ ] Could use a CSV Parser to handle large amounts of data that the university would have to manually input otherwise
- [ ] Consider using required flags for Student model fields (what information might not be available for every student upon enrollment?)
- [ ] A minor optimization would be to use a newer version of MongoDB that lets you use $toObjectID for casting (would eliminate need for studentId generation)
- [ ] Search function could be much better optimized with sorting and a search method closer to Binary Search-level efficiency
- [ ] A helper UI screen, or at least additional Liquid views, would help users navigate API endpoints easier if they don't have access to testing software (i.e. Postman)