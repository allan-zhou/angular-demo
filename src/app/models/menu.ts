export class Menu {
    name: string;
    url: string;
    desc?: string;
}

export let MenuData: Menu[] =[
    { name: '项目', url: '/dashboard/projects', desc: '' },
    { name: '群组', url: '/dashboard/groups', desc: '' },
    { name: '活动', url: '/dashboard/activity', desc: '' },
    { name: '里程碑', url: '/dashboard/milestones', desc: '' },
    { name: '代码片段', url: '/dashboard/snippets', desc: '' },
    { name: '测试', url: '/demo', desc: '' },
]