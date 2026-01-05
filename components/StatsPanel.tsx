
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Users, Database, Globe } from 'lucide-react';
import { COLORS } from '../constants';

const data = [
  { name: 'Mon', queries: 400 },
  { name: 'Tue', queries: 300 },
  { name: 'Wed', queries: 600 },
  { name: 'Thu', queries: 800 },
  { name: 'Fri', queries: 500 },
  { name: 'Sat', queries: 900 },
  { name: 'Sun', queries: 1100 },
];

const StatsPanel: React.FC = () => {
  return (
    <div className="p-8 space-y-8 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<Database size={24}/>} label="Records Analyzed" value="4.2M" sub="+12k today" />
        <StatCard icon={<Users size={24}/>} label="Active Users" value="842" sub="32 new this week" />
        <StatCard icon={<Activity size={24}/>} label="System Latency" value="12ms" sub="Global average" />
        <StatCard icon={<Globe size={24}/>} label="Nodes Connected" value="156" sub="Across 24 regions" />
      </div>

      <div className="glass-panel p-8 rounded-2xl border border-white/5">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Global Query Density</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Week-over-week performance analytics</p>
          </div>
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#B794F4]" />
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Realtime Traffic</span>
          </div>
        </div>

        {/* Added min-width and min-height to ensure ResponsiveContainer doesn't get 0 or -1 values */}
        <div className="h-[300px] w-full min-h-[300px] relative">
          <ResponsiveContainer width="100%" height="100%" debounce={50}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorQueries" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.lavender} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={COLORS.lavender} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#4B5563', fontSize: 10}} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#4B5563', fontSize: 10}} 
              />
              <Tooltip 
                contentStyle={{backgroundColor: '#1A1A1C', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px'}}
                itemStyle={{color: '#B794F4', fontSize: '12px'}}
                labelStyle={{color: '#9CA3AF', fontSize: '10px', marginBottom: '4px'}}
              />
              <Area 
                type="monotone" 
                dataKey="queries" 
                stroke={COLORS.lavender} 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorQueries)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode, label: string, value: string, sub: string }> = ({ icon, label, value, sub }) => (
  <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors">
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#B794F4] mb-4">
      {icon}
    </div>
    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{label}</p>
    <div className="flex items-baseline gap-2">
      <h4 className="text-2xl font-bold text-white">{value}</h4>
      <span className="text-[10px] text-emerald-500 font-bold">{sub}</span>
    </div>
  </div>
);

export default StatsPanel;
