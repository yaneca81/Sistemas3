import { Route, Routes } from 'react-router-dom'
import { ProjectRegisterPage } from '../pages/ProjectRegisterPage'
import { TaskRegisterPage } from '../pages/TaskRegisterPage'
import { DashboardPage } from '../DashboardPage'
import { SupplyRgisterPage } from '../pages/SupplyRgisterPage'
import { ReleaseRegisterPage } from '../pages/ReleaseRegisterPage'
import { ConsumeRegisterPage } from '../pages/ConsumeRegisterPage'
import { ProjectListPage } from '../pages/ProjectListPage'
import { ProjectEditPage } from '../pages/ProjectEditPage'
import { ProjectDetailPage } from '../pages/ProjectDetailPage'
import { TaskListPage } from '../pages/TaskListPage'
import { TaskDetailPage } from '../pages/TaskDetailPage'
import { TaskEditPage } from '../pages/TaskEditPage'
import { SupplyListPage } from '../pages/SupplyListPage'
import { SupplyEditPage } from '../pages/SupplyEditPage'
import { ReleaseListPage } from '../pages/ReleaseListPage'
import { ReleaseEditPage } from '../pages/ReleaseEditPage'
import { ReleaseDetailPage } from '../pages/ReleaseDetailPage'
import { ConsumeListPage } from '../pages/ConsumeListPage'
import { ConsumeEditPage } from '../pages/ConsumeEditPage'
import { ConsumeDetailPage } from '../pages/ConsumeDetailPage'

export const DashboardRoutes = () => {
  return (
    <DashboardPage>
      <Routes>
        <Route path='/registerProject' element={<ProjectRegisterPage />} />
        <Route path='/listProjects' element={<ProjectListPage />} />
        <Route path='/editProject/:projectId' element={<ProjectEditPage />} />
        <Route path='/detailProject/:projectId' element={<ProjectDetailPage />} />

        <Route path='/registerTask' element={<TaskRegisterPage />} />
        <Route path='/listTasks/' element={<TaskListPage />} />
        <Route path='/editTask/:taskId' element={<TaskEditPage />} />
        <Route path='/detailTask/:taskId' element={<TaskDetailPage />} />

        <Route path='/registerSupply' element={<SupplyRgisterPage />} />
        <Route path='/listSupplies' element={<SupplyListPage />} />
        <Route path='/editSupply/:supplyId' element={<SupplyEditPage />} />

        <Route path='/registerRelease' element={<ReleaseRegisterPage />} />
        <Route path='/listReleases' element={<ReleaseListPage />} />
        <Route path='/editRelease/:releaseId' element={<ReleaseEditPage />} />
        <Route path='/detailRelease/:releaseId' element={<ReleaseDetailPage />} />

        <Route path='/registerConsume' element={<ConsumeRegisterPage />} />
        <Route path='/listConsume' element={<ConsumeListPage />} />
        <Route path='/editConsume/:consumeId' element={<ConsumeEditPage />} />
        <Route path='/detailConsume/:consumeId' element={<ConsumeDetailPage />} />
      </Routes>
    </DashboardPage>
  )
}
