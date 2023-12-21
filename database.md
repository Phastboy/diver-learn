```mermaid
erDiagram
	USER }|--o{ COURSE : enrol
	USER {
	string name
	string email
	string id
	}
	COURSE{
	string title
	array assignment
	array quiz
	}
	INSTRUCTOR }|--o{ COURSE: guides
	INSTRUCTOR {
	string name
	string id
	}
```
