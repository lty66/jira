import React from 'react'
import { useState, useEffect } from "react";

export interface User {
  id:string;
  name:string;
  email:string;
  title:string;
  organization:string;
}
interface SearchaPanelProps {
  users:User[],
  param:{
    name:string;
    personId:string;
  },
  setParam:(param:SearchaPanelProps['param'])=>void;
}
export const SearchPanel = ({users,param,setParam}:SearchaPanelProps)=>{
  return <form>
    <div>
      <input type='text' onChange={(e)=>{
        setParam({
          ...param,
          name:e.target.value
        })
      }}/>
      <select value={param.personId} onChange={(e)=>
        setParam({
          ...param,
          personId:e.target.value
        })}>
        <option value={''}>负责人</option>
        {
          users.map((user)=><option key={user.id} value={user.id}>{user.name}</option>)
        }
      </select>
    </div>
  </form>
}