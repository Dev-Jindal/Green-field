import React, { useState, useEffect, useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { 
  CheckCircle, AlertCircle, Clock, Plus, Layout, BarChart2, 
  Settings, Zap, BrainCircuit, GripVertical, X, Save 
} from 'lucide-react';

// --- 1. MOCK BACKEND DATA & TYPES ---

// Color Constants
const COLORS = {
  primary: '#8b5cf6', // Violet
  secondary: '#ec4899', // Pink
  success: '#10b981', // Emerald
  warning: '#f59e0b', // Amber
  dark: '#0f172a', // Slate 900
  glass: 'rgba(30, 41, 59, 0.7)',
};

const initialTasks = [
  { id: 't1', title: 'Fix API Latency', category: 'Engineering', status: 'todo', priority: 'high', points: 5 },
  { id: 't2', title: 'Q3 Financial Report', category: 'Finance', status: 'in-progress', priority: 'medium', points: 3 },
  { id: 't3', title: 'Update Landing Page', category: 'Design', status: 'done', priority: 'low', points: 2 },
  { id: 't4', title: 'Client Feedback Loop', category: 'Product', status: 'todo', priority: 'high', points: 8 },
  { id: 't5', title: 'Database Migration', category: 'Engineering', status: 'in-progress', priority: 'critical', points: 13 },
];

const analyticsHistory = [
  { day: 'Mon', planned: 20, completed: 15 },
  { day: 'Tue', planned: 25, completed: 12 }, // Big Gap
  { day: 'Wed', planned: 20, completed: 22 }, // Overachieved
  { day: 'Thu', planned: 30, completed: 18 },
  { day: 'Fri', planned: 25, completed: 24 },
  { day: 'Sat', planned: 10, completed: 5 },
  { day: 'Sun', planned: 5, completed: 5 },
];

// --- 2. COMPONENTS ---

// A. REUSABLE GLASS CARD
const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-slate-800/60 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-xl ${className}`}>
    {children}
  </div>
);

// B. DRAG AND DROP KANBAN COLUMN
const KanbanColumn = ({ title, status, tasks, onDrop, onDragStart, color }) => {
  const columnTasks = tasks.filter(t => t.status === status);

  return (
    <div 
      className="flex-1 min-w-[300px] bg-slate-900/50 rounded-xl p-4 border border-slate-800"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e, status)}
    >
      <div className={`flex items-center gap-2 mb-4 pb-2 border-b border-slate-700 ${color}`}>
        <div className={`w-3 h-3 rounded-full ${color.replace('text-', 'bg-')}`}></div>
        <h3 className="font-bold uppercase tracking-wider text-sm">{title}</h3>
        <span className="ml-auto text-xs bg-slate-800 px-2 py-1 rounded-md text-slate-400">{columnTasks.length}</span>
      </div>

      <div className="flex flex-col gap-3">
        {columnTasks.map(task => (
          <div
            key={task.id}
            draggable
            onDragStart={(e) => onDragStart(e, task.id)}
            className="bg-slate-800 p-4 rounded-lg border border-slate-700 cursor-grab active:cursor-grabbing hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <span className={`text-[10px] px-2 py-0.5 rounded border ${
                task.priority === 'critical' ? 'border-red-500/30 text-red-400 bg-red-500/10' :
                task.priority === 'high' ? 'border-orange-500/30 text-orange-400 bg-orange-500/10' :
                'border-blue-500/30 text-blue-400 bg-blue-500/10'
              }`}>
                {task.priority.toUpperCase()}
              </span>
              <GripVertical size={14} className="text-slate-600 group-hover:text-slate-400" />
            </div>
            <p className="font-semibold text-slate-100 text-sm mb-2">{task.title}</p>
            <div className="flex justify-between items-center text-xs text-slate-500">
              <span>{task.category}</span>
              <span className="flex items-center gap-1"><Zap size={10} className="text-yellow-500"/> {task.points} pts</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// C. AI SUGGESTION ENGINE
const AIEngine = ({ tasks, efficiency }) => {
  // Logic to generate suggestions based on "Gap" and Task State
  const suggestions = useMemo(() => {
    const alerts = [];
    const criticalCount = tasks.filter(t => t.priority === 'critical' && t.status !== 'done').length;
    
    if (efficiency < 60) {
      alerts.push({ title: "Gap Alert: High Latency", msg: "Your planned vs. actual gap is 40%+. Recommendation: Enable 'Focus Mode' to block notifications.", type: 'critical' });
    }
    if (criticalCount > 2) {
      alerts.push({ title: "Overloaded Pipeline", msg: `You have ${criticalCount} critical tasks pending. Suggestion: Delegate 'Database Migration'.`, type: 'warning' });
    }
    if (efficiency > 90) {
      alerts.push({ title: "Flow State Detected", msg: "Performance is optimal. Good time to tackle 'Engineering' backlog.", type: 'success' });
    }
    return alerts;
  }, [tasks, efficiency]);

  return (
    <GlassCard className="p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full pointer-events-none"></div>
      <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-white">
        <BrainCircuit className="text-pink-500" /> 
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          Nexus AI Insights
        </span>
      </h3>
      <div className="space-y-3">
        {suggestions.map((alert, idx) => (
          <div key={idx} className={`p-3 rounded-lg border flex gap-3 items-start ${
            alert.type === 'critical' ? 'bg-red-500/10 border-red-500/20' :
            alert.type === 'warning' ? 'bg-amber-500/10 border-amber-500/20' :
            'bg-emerald-500/10 border-emerald-500/20'
          }`}>
            <div className={`mt-1 w-2 h-2 rounded-full ${
               alert.type === 'critical' ? 'bg-red-400' :
               alert.type === 'warning' ? 'bg-amber-400' :
               'bg-emerald-400'
            }`}></div>
            <div>
              <p className="text-slate-200 text-sm font-bold">{alert.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{alert.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

// --- 3. MAIN APP CONTAINER ---

export default function NexusDashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [view, setView] = useState('dashboard'); // dashboard | board
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // Stats Calculation
  const totalPlanned = analyticsHistory.reduce((acc, cur) => acc + cur.planned, 0);
  const totalCompleted = analyticsHistory.reduce((acc, cur) => acc + cur.completed, 0);
  const efficiencyScore = Math.round((totalCompleted / totalPlanned) * 100);

  // Drag Handlers
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("taskId", id);
  };

  const handleDrop = (e, newStatus) => {
    const id = e.dataTransfer.getData("taskId");
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, status: newStatus } : t
    ));
  };

  const addTask = () => {
    if(!newTaskTitle) return;
    const newTask = { 
      id: `t${Date.now()}`, 
      title: newTaskTitle, 
      category: 'General', 
      status: 'todo', 
      priority: 'medium', 
      points: 1 
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b1121] text-slate-100 font-sans selection:bg-purple-500 selection:text-white flex overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-20 lg:w-64 border-r border-slate-800 bg-slate-900/50 flex flex-col p-4 gap-2">
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center font-bold text-white">N</div>
          <span className="font-bold text-xl hidden lg:block tracking-tight">Nexus</span>
        </div>
        
        <nav className="space-y-1">
          <button 
            onClick={() => setView('dashboard')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${view === 'dashboard' ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <BarChart2 size={20} /> <span className="hidden lg:block">Analytics Hub</span>
          </button>
          <button 
            onClick={() => setView('board')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${view === 'board' ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <Layout size={20} /> <span className="hidden lg:block">Kanban Board</span>
          </button>
        </nav>

        <div className="mt-auto">
           <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-4 rounded-xl border border-indigo-500/30 hidden lg:block">
             <p className="text-xs text-indigo-200 mb-2">System Status</p>
             <div className="flex items-center gap-2 text-sm font-bold text-emerald-400">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
               Online
             </div>
           </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 h-screen overflow-y-auto p-4 lg:p-8 relative">
        
        {/* TOP BAR */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">
              {view === 'dashboard' ? 'Command Center' : 'Task Operations'}
            </h1>
            <p className="text-slate-400 text-sm">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-200 px-4 py-2 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Plus size={18} /> Create Task
          </button>
        </header>

        {/* DASHBOARD VIEW */}
        {view === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* KPI STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-6 flex flex-col justify-between h-40 group hover:border-purple-500/30 transition-colors">
                 <div className="flex justify-between items-start">
                   <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Clock size={24} /></div>
                   <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-full">+4% vs last wk</span>
                 </div>
                 <div>
                   <p className="text-slate-400 text-sm">Efficiency Score</p>
                   <p className="text-3xl font-bold text-white mt-1">{efficiencyScore}%</p>
                 </div>
                 <div className="w-full bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
                   <div className="h-full bg-purple-500" style={{ width: `${efficiencyScore}%` }}></div>
                 </div>
              </GlassCard>

              <GlassCard className="p-6 flex flex-col justify-between h-40 group hover:border-emerald-500/30 transition-colors">
                 <div className="flex justify-between items-start">
                   <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><CheckCircle size={24} /></div>
                 </div>
                 <div>
                   <p className="text-slate-400 text-sm">Tasks Completed</p>
                   <p className="text-3xl font-bold text-white mt-1">{totalCompleted}</p>
                 </div>
              </GlassCard>
              
              <GlassCard className="p-6 flex flex-col justify-between h-40 group hover:border-pink-500/30 transition-colors">
                 <div className="flex justify-between items-start">
                   <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400"><Zap size={24} /></div>
                 </div>
                 <div>
                   <p className="text-slate-400 text-sm">Velocity (Avg Pts)</p>
                   <p className="text-3xl font-bold text-white mt-1">24.5</p>
                 </div>
              </GlassCard>
            </div>

            {/* CHARTS ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* GAP ANALYSIS CHART */}
              <GlassCard className="lg:col-span-2 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Productivity Gap Analysis</h3>
                  <div className="flex gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-500"></div>Planned</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-400"></div>Actual</span>
                  </div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analyticsHistory}>
                      <defs>
                        <linearGradient id="colorPlanned" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.3}/>
                          <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={COLORS.success} stopOpacity={0.3}/>
                          <stop offset="95%" stopColor={COLORS.success} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                      <XAxis dataKey="day" stroke="#94a3b8" tick={{fontSize: 12}} />
                      <YAxis stroke="#94a3b8" tick={{fontSize: 12}} />
                      <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} />
                      <Area type="monotone" dataKey="planned" stroke={COLORS.primary} fillOpacity={1} fill="url(#colorPlanned)" strokeWidth={2} />
                      <Area type="monotone" dataKey="completed" stroke={COLORS.success} fillOpacity={1} fill="url(#colorCompleted)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>

              {/* AI INSIGHTS */}
              <div className="lg:col-span-1">
                 <AIEngine tasks={tasks} efficiency={efficiencyScore} />
              </div>
            </div>
          </div>
        )}

        {/* BOARD VIEW */}
        {view === 'board' && (
          <div className="flex gap-6 overflow-x-auto pb-4 h-[calc(100vh-140px)] animate-in slide-in-from-right-4 duration-300">
            <KanbanColumn 
              title="To Do" 
              status="todo" 
              tasks={tasks} 
              onDrop={handleDrop} 
              onDragStart={handleDragStart} 
              color="text-slate-400" 
            />
            <KanbanColumn 
              title="In Progress" 
              status="in-progress" 
              tasks={tasks} 
              onDrop={handleDrop} 
              onDragStart={handleDragStart} 
              color="text-blue-400" 
            />
            <KanbanColumn 
              title="Done" 
              status="done" 
              tasks={tasks} 
              onDrop={handleDrop} 
              onDragStart={handleDragStart} 
              color="text-emerald-400" 
            />
          </div>
        )}

      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-md p-6 rounded-2xl shadow-2xl relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 text-slate-500 hover:text-white"><X size={20}/></button>
            <h2 className="text-xl font-bold mb-4">Initialize New Task</h2>
            <input 
              autoFocus
              type="text" 
              placeholder="Task Protocol Title..." 
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-all mb-4"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTask()}
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-400 hover:text-white">Cancel</button>
              <button onClick={addTask} className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
                <Save size={16} /> Save Protocol
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

/**
 * --- BACKEND SCHEMA (Conceptual Implementation) ---
 * * If you were to connect this to a Node.js/MongoDB backend, 
 * use this Mongoose Schema:
 * * const TaskSchema = new mongoose.Schema({
 * title: { type: String, required: true },
 * status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' },
 * priority: { type: String, enum: ['low', 'medium', 'high', 'critical'] },
 * plannedDate: { type: Date },
 * completedDate: { type: Date },
 * points: { type: Number, default: 1 },
 * user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
 * }, { timestamps: true });
 * * // Analytics Aggregation (MongoDB Aggregation Pipeline hint):
 * // $group by date, sum(points) where status = 'done' vs count(total)
 */