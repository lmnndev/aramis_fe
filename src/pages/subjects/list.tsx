import {useState,useMemo} from 'react'
import { ListView } from '@/components/refine-ui/views/list-view'
import { Breadcrumb } from '@/components/refine-ui/layout/breadcrumb'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DEPARTMENT_OPTIONS } from '@/constants'
import { CreateButton } from '@/components/refine-ui/buttons/create'
import { DataTable } from '@/components/refine-ui/data-table/data-table'
import { useTable } from '@refinedev/react-table'
import { Subject } from '../../types'
import { Badge } from '@/components/ui/badge'
import { ColumnDef } from '@tanstack/react-table'
const SubjectsList = () => {
  const [search, setSearch] = useState('')
  const [selectedDept, setSelectedDept] = useState('all')

  const departmentFilters = selectedDept === 'all' ? [] : [
    {
      field: 'department', 
      operator: 'eq' as const, 
      value: selectedDept
    }
  ]

  const searchFilters = search ? [
    {
      field: 'name', 
      operator: 'contains' as const, 
      value: search
    }
  ] : []

  //Memoized columns to avoid recreating each column on every render
  const subjectTable = useTable<Subject>({
    columns: useMemo<ColumnDef<Subject>[]>(()=> [
      { 
        id:'code', 
        accessorKey: 'code', 
        size: 100,
        header: () => <p className='column-title ml-2'>Code</p>,
        cell: ({getValue}) => <Badge>{getValue<string>()}</Badge>
      },
      { 
        id:'name', 
        accessorKey: 'name', 
        size: 200,
        header: () => <p className='column-title'>Name</p>,
        cell: ({getValue}) => <span>{getValue<string>()}</span>,
        //includes text based filtering on this column
        filterFn: 'includesString'
      },
      {
        id:'department',
        accessorKey: 'department',
        size: 150,
        header: () => <p className='column-title'>Department</p>,
        cell: ({getValue}) => <Badge variant="secondary">{getValue<string>()}</Badge>,
      },
      {
        id:'description',
        accessorKey: 'description',
        size: 300,
        header: () => <p className='column-title'>Description</p>,
        cell: ({getValue}) => <span className='truncate line-clamp-2'>{getValue<string>()}</span>,
      }
    ], []),
    refineCoreProps: {
      resource: 'subjects',
      pagination: {pageSize: 10, mode: 'server'},
      filters: {
        permanent: [...departmentFilters, ...searchFilters]
      },
      sorters: {
        initial: [
          {field: 'id', order: 'desc'}
        ]
      }
    }
  });
  return (
    <ListView>
      <Breadcrumb/>
      <h1 className="page-title">
        Hey
      </h1>
      <div className="intro-row">
        <p>
          Quick access to essential
        </p>

        {/* Search Box Seperator */}
        <div className="actions-row">
          {/* Search Input */}
          <div className="search-field">
            <Search className="search-icon"/>
            <Input 
            type="text" 
            placeholder='Search a class..'
            className="pl-10 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
          </div>
          {/* Search Select */}
          <div className="search-select">
            <Select 
            value={selectedDept} 
            onValueChange={setSelectedDept}> 
              <SelectTrigger>
                <SelectValue placeholder="Filter by department"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Departments
                </SelectItem>
                {DEPARTMENT_OPTIONS.map(department=> (
                <SelectItem value={department.value} key={department.value}>
                  {department.label}
                </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <CreateButton/>
          </div>
        </div>
        {/* End of Search Box Seperator */}
      </div>

      {/* Tables */}
      <DataTable table={subjectTable}/>
    </ListView>
  )
}

export default SubjectsList