'use client'
import Courses from '@/app/ui/dashboard/courses';
import NoCourses from '@/app/ui/dashboard/noCourses';
import { useState, useEffect } from 'react';
import { fetchUser } from '../lib/userData';

export default function Dashboard() {
  const [courses, setCourses] = useState(false);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUser().then((user) => {
      setCourses(user.courses);
      setName(user.name);
      setLoading(false);
    }).catch((e) => {
      setError(true);
      setLoading(false);
    });
  }, []);

  if (error) {
    return (
      <div>
        <Nav />
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold">Error</h1>
        </div>
      </div>
    );
  } else if (courses) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-center mt-8">Welcome, {name}!</h1>
        <Courses courses={courses} name={name} />
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-2xl font-bold text-center mt-8">Welcome, {name}!</h1>
        <NoCourses />
      </div>
    );
  }
}
