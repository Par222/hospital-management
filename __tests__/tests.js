import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import  Tags from  "../components/departments/Tags"
import  DoctorDetails from "../components/doctor/DoctorDetails"
import DoctorCard from "../components/doctor/DoctorCard"
import Choose from "../components/about/Choose"
import GenericModal from '../components/common/GenericModal'
import AppointmentsInfo from "../components/ScheduleAppointments/AppointmentsInfo"

describe('Tags in the Blog', () => {

    
  
    it('The tags should be correcty rendered for department Blog', () => {
      render(<Tags/>)
      expect(screen.getByRole('tag')).toBeInTheDocument()
    
    })
  
   
  
  })
 
  describe('About Us', () => {

    
  
    it('Selected section should have blue text ', () => {
      render(<Choose/>)
      expect(screen.getByRole('about')).toHaveClass('text-tertiaryblue-50')
    
    })
  
   
  
  })
  

  