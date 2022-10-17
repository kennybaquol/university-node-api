# Unviersity Node API
A university is looking to build software that enables them to maintain details about their students,
faculty, courses, course schedules, and student grades and major/minor progress.
Phase 1 of the project is to build a RESTful API to maintain all personal student data.

## Client Requirements (Phase 1)
- [X] No UI is necessary, only API endpoints
- [] RESTful CRUD endpoints must be available for the Student model
- [] Must have an endpoint to perform searches for students based on full name
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
- [] All endpoint responses must have the HTTP Response Header "x-organization" with the value of "Skyline"
    - [] e.g. x-organization: Skyline

## Potential Shortcomings / Icebox
- [] Needs a way to assign student IDs without the possibility of duplicates
- [] 
- [] 
- [] 
- [] 