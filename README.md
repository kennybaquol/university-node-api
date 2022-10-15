# Unviersity Node API
A university is looking to build software that enables them to maintain details about their students,
faculty, courses, course schedules, and student grades and major/minor progress.
Phase 1 of the project is to build a RESTful API to maintain all personal student data.

## Client Requirements (Phase 1)
- [] No UI is necessary, only API endpoints
- [] RESTful CRUD endpoints must be available for the Student model
- [] Must have an endpoint to perform searches for students based on full name
- [] Data must be persisted to a database 
- [] The Student model includes the following fields:
    - [] First name
    - [] Last name
    - [] Date of birth
    - [] Home address
    - [] Enrollment status
    - [] Enrollment date
- [] All endpoints must require an API Key to authenticate against the API and gain access to its resources
    - [] If a request is unauthenticated, a 401 HTTP status code is returned
- [] All endpoint responses must have the HTTP Response Header "x-organization" with the value of "Skyline"
    - [] e.g. x-organization: Skyline

## Potential Shortcomings / Icebox