
import React from 'react';
import { MOCK_HISTORY } from '../constants';
import { SearchEntry } from '../types';

const HistoryTable: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 md:py-12 px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Activity Log</h2>
          <p className="text-sm text-gray-500">History of your encrypted searches.</p>
        </div>
      </div>

      <div className="space-y-4 md:space-y-0 md:glass-panel md:rounded-3xl md:border md:border-white/5 md:overflow-hidden">
        <div className="hidden md:block">
          <table className="w-full text-left">
            <thead className="bg-white/5 border-b border-white/5">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Query Target</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_HISTORY.map((entry) => (
                <tr key={entry.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5">
                    <span className="text-sm font-mono text-white group-hover:text-[#B794F4] transition-colors">{entry.query}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2 py-1 rounded bg-white/5 text-[10px] font-bold text-gray-500 uppercase">{entry.type}</span>
                  </td>
                  <td className="px-6 py-5 text-xs text-gray-500">{entry.timestamp}</td>
                  <td className="px-6 py-5"><StatusBadge status={entry.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {MOCK_HISTORY.map((entry) => (
            <div key={entry.id} className="glass-panel p-5 rounded-2xl border border-white/5 flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{entry.type}</p>
                <p className="text-sm font-mono text-white truncate mb-1">{entry.query}</p>
                <p className="text-[10px] text-gray-600">{entry.timestamp}</p>
              </div>
              <StatusBadge status={entry.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: SearchEntry['status'] }> = ({ status }) => {
  const styles = {
    'Found': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    'No Results': 'bg-rose-500/10 text-rose-500 border-rose-500/20',
    'Scanning': 'bg-blue-500/10 text-blue-500 border-blue-500/20 animate-pulse'
  };

  return (
    <span className={`px-2 py-1 rounded-md text-[9px] font-bold uppercase border whitespace-nowrap ${styles[status]}`}>
      {status}
    </span>
  );
};

export default HistoryTable;
