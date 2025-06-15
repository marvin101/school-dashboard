import { useState } from 'react'
import { Sidebar } from './components/sidebar'
import { Card, CardContent } from './components/ui/card';
import { StudentTable } from './components/StudentTable';
import './App.css'

const tabs = ['Dashboard', 'Students', 'Teachers', 'Classes', ' Exams', ' Notices'];

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard')

  return (
    <>
        <div className="flex min-h-screen bg-gray-100">
      <Sidebar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">{activeTab}</h1>
        <Card>
          <CardContent className="p-4">
            {activeTab === "Dashboard" && <p>Welcome to the School Dashboard.</p>}
            {activeTab === "Students" && <StudentTable />}
            {activeTab === "Teachers" && <p>Manage teacher data here.</p>}
            {activeTab === "Classes" && <p>View and assign classes.</p>}
            {activeTab === "Exams" && <p>Manage examinations here.</p>}
            {activeTab === "Notices" && <p>Post and manage notices here.</p>}
          </CardContent>
        </Card>
      </main>
    </div>
    </>
  )
}

export default App
