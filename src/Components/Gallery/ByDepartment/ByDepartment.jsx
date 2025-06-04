import React, { useEffect, useState } from "react";
import { useGetDepartmentsQuery } from "../GallerySlice.jsx";

export default function ByDepartment() {
  const { data: departmentData, isLoading, isSuccess } = useGetDepartmentsQuery();
  console.log("departmentData: ", departmentData);

  const [selectedDepartment, setSelectedDepartment] = useState(); 

  useEffect(() => {
    if(isSuccess){
      setSelectedDepartment(departmentData.departments);
    }
  }, [isSuccess, departmentData]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {selectedDepartment && selectedDepartment.map((department) => (
        <div className="DepartmentList" key={department.id}> 
        <h3>{department.displayName}</h3>
        </div>
        
      ))}
    </div>
  );
}
