```mermaid
erDiagram
	USER }|--o{ COURSE : enrol
	USER {
	string name
	string email
	string user_id
	}
	INSTRUCTOR }|--o{ COURSE: create
	INSTRUCTOR {
	string name
	string instructor_id
	}
	COURSE{
	string title
	string description
	string course_id
	string instructor_id
	}
	COURSE ||--o{ ASSIGNMENT : give
	ASSIGNMENT {
	string assignment_id
	string course_id
	string title
	string description
	string due_date
	int point
	}
	USER }|--|| ENROLLMENT : may
	ENROLLMENT {
	string enrollment_id
	string course_id
	string user_id
	string status
	}
	USER ||--o| SUBMISSION : return
	SUBMISSION {
	string assignment_id
	string submission_id
	string user_id
	string submission_date
	int score
	string feedback
	}
```
