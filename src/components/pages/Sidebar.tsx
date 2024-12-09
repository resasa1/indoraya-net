// import * as React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function Sidebar() {
  return (
    <div className='border-right border-2 border-solid border-gray-400'>
        <div className='p-5 flex gap-2'>
        <Input type="search" placeholder="waht are u looking for?"/>
        <Button>Find</Button>
        </div>
    </div>
  )
}
