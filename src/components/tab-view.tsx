import { TabView as TabViewComponent, TabPanel } from 'primereact/tabview'
import { useEffect, useState } from 'react'
const mostViewedCourses = [
  { id: 1, title: 'Curso 1', views: 200 },
  { id: 2, title: 'Curso 2', views: 180 },
  { id: 3, title: 'Curso 3', views: 150 },
]
export default function TabView() {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedCouse, setSelectedCouse] = useState<null | {
    id: string
    title: string
    view: number
  }>(null)

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }

  useEffect(() => {
    if (selectedCouse) {
      if (selectedCouse.id !== mostViewedCourses[activeTab])
        setSelectedCouse(mostViewedCourses[activeTab])
      console.log(mostViewedCourses[activeTab + 1])
    }
  }, [activeTab])

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="mb-6 text-3xl font-bold">Destaques</h2>
        {/* Tabs */}
        <div className="mb-6 flex space-x-4">
          <button
            className={`tab-btn ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(0)}
          >
            Destaque 1
          </button>
          <button
            className={`tab-btn ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(1)}
          >
            Destaque 2
          </button>
          <button
            className={`tab-btn ${activeTab === 3 ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            Destaque 3
          </button>
          {/* Adicione mais botões para mais destaques, se necessário */}
        </div>
        {/* Conteúdo dos destaques */}
        <div className=" w-full">
          <div
            className={`animate-one h-[400px] w-full animate-jump-in bg-red-500 animate-delay-1000 `}
          >
            {mostViewedCourses[activeTab].title}
          </div>
        </div>
      </div>
    </section>
  )
}
