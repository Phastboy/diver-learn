import Courses from '@/app/ui/courses';
import Button from '@/app/ui/button';

export default function Dashboard() {
  return (
    <div>
      <h1>Welcome user to your dashboard</h1>
      <Courses /> ? <Courses /> : <div><p>You're not enrolled in any course</p>
        <Button>Add courses</Button>
      </div>
    </div>
  );
}
