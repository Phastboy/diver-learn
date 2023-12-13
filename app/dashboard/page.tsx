'use client'
import Courses from '@/app/ui/dashboard/courses';
import NoCourses from '@/app/ui/dashboard/noCourses';
import Nav from '@/app/ui/dashboard/nav';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [courses, setCourses] = useState(false);
  return (
    <div className='max-h-screen'>
      <Nav/>
      {courses ? <Courses/> : <NoCourses/>}
    </div>
  );
}
