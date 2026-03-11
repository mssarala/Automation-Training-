/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  ExternalLink, 
  ChevronRight, 
  Trophy, 
  Code2, 
  Terminal, 
  FileText, 
  Layers,
  GraduationCap,
  Layout
} from 'lucide-react';
import { TRAINING_PLAN } from './constants';
import { DayPlan, Task } from './types';

export default function App() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [selectedDay, setSelectedDay] = useState<number>(1);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('automation-training-progress');
    if (saved) {
      try {
        setCompletedTasks(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse progress', e);
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('automation-training-progress', JSON.stringify(completedTasks));
  }, [completedTasks]);

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId) 
        : [...prev, taskId]
    );
  };

  const currentDayPlan = TRAINING_PLAN.find(d => d.day === selectedDay) || TRAINING_PLAN[0];
  
  const totalTasks = TRAINING_PLAN.reduce((acc, day) => acc + day.tasks.length, 0);
  const completedCount = completedTasks.length;
  const progressPercentage = Math.round((completedCount / totalTasks) * 100);

  const getDayProgress = (day: DayPlan) => {
    const dayTasks = day.tasks.map(t => t.id);
    const completedDayTasks = dayTasks.filter(id => completedTasks.includes(id));
    return (completedDayTasks.length / dayTasks.length) * 100;
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans selection:bg-[#5A5A40] selection:text-white">
      {/* Header */}
      <header className="bg-white border-b border-[#1A1A1A]/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#5A5A40] rounded-xl flex items-center justify-center text-white">
              <GraduationCap size={24} />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">Automation Training Hub</h1>
              <p className="text-xs text-[#1A1A1A]/50 uppercase tracking-widest font-medium">BDD • Cucumber • Serenity</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs font-medium text-[#1A1A1A]/50 uppercase tracking-wider">Overall Progress</p>
              <p className="text-lg font-bold">{progressPercentage}%</p>
            </div>
            <div className="w-48 h-2 bg-[#1A1A1A]/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#5A5A40]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-6">7-Day Roadmap</h2>
            <div className="space-y-3">
              {TRAINING_PLAN.map((day) => {
                const isSelected = selectedDay === day.day;
                const progress = getDayProgress(day);
                const isCompleted = progress === 100;

                return (
                  <button
                    key={day.day}
                    onClick={() => setSelectedDay(day.day)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                      isSelected 
                        ? 'bg-white shadow-xl shadow-[#5A5A40]/5 border border-[#5A5A40]/20' 
                        : 'bg-white/50 hover:bg-white border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                        isSelected ? 'bg-[#5A5A40] text-white' : 'bg-[#1A1A1A]/5 text-[#1A1A1A]/40'
                      }`}>
                        {isCompleted ? <CheckCircle2 size={18} /> : day.day}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-semibold truncate ${isSelected ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/70'}`}>
                          {day.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-1 bg-[#1A1A1A]/5 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#5A5A40]/40" 
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <span className="text-[10px] font-bold text-[#1A1A1A]/30">{Math.round(progress)}%</span>
                        </div>
                      </div>
                      <ChevronRight 
                        size={16} 
                        className={`transition-transform duration-300 ${isSelected ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} 
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stats Card */}
            <div className="mt-8 p-6 bg-[#5A5A40] rounded-3xl text-white relative overflow-hidden">
              <Trophy className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12" />
              <h4 className="text-sm font-bold uppercase tracking-widest opacity-60 mb-4">Your Achievements</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold">{completedCount}</p>
                  <p className="text-xs opacity-60">Tasks Done</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{totalTasks - completedCount}</p>
                  <p className="text-xs opacity-60">Remaining</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[#1A1A1A]/5"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5A5A40]/10 text-[#5A5A40] rounded-full text-xs font-bold uppercase tracking-wider">
                      Day {currentDayPlan.day} Focus
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight leading-tight">
                      {currentDayPlan.title}
                    </h2>
                    <p className="text-lg text-[#1A1A1A]/60 max-w-2xl leading-relaxed">
                      {currentDayPlan.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Topics & Tasks */}
                  <div className="space-y-10">
                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1A1A1A]/40 mb-6">
                        <Layers size={16} /> Key Topics
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentDayPlan.topics.map((topic, i) => (
                          <span key={i} className="px-4 py-2 bg-[#F5F5F0] rounded-xl text-sm font-medium border border-[#1A1A1A]/5">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1A1A1A]/40 mb-6">
                        <CheckCircle2 size={16} /> Practical Tasks
                      </h3>
                      <div className="space-y-3">
                        {currentDayPlan.tasks.map((task) => (
                          <button
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className={`w-full flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 text-left ${
                              completedTasks.includes(task.id)
                                ? 'bg-[#5A5A40]/5 border-[#5A5A40]/20 text-[#1A1A1A]/40'
                                : 'bg-white border-[#1A1A1A]/10 hover:border-[#5A5A40]/40'
                            }`}
                          >
                            <div className="mt-0.5">
                              {completedTasks.includes(task.id) ? (
                                <CheckCircle2 size={20} className="text-[#5A5A40]" />
                              ) : (
                                <Circle size={20} className="text-[#1A1A1A]/20" />
                              )}
                            </div>
                            <span className={`text-sm font-medium ${completedTasks.includes(task.id) ? 'line-through' : ''}`}>
                              {task.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    </section>
                  </div>

                  {/* Resources */}
                  <div className="space-y-10">
                    <section>
                      <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1A1A1A]/40 mb-6">
                        <BookOpen size={16} /> Learning Resources
                      </h3>
                      <div className="space-y-4">
                        {currentDayPlan.resources.map((resource, i) => (
                          <a
                            key={i}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-5 bg-[#F5F5F0] rounded-2xl border border-transparent hover:border-[#5A5A40]/20 hover:bg-white transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                {resource.type === 'video' && <Terminal size={14} className="text-red-500" />}
                                {resource.type === 'article' && <FileText size={14} className="text-blue-500" />}
                                {resource.type === 'documentation' && <Code2 size={14} className="text-emerald-500" />}
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{resource.type}</span>
                              </div>
                              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h4 className="font-semibold text-[#1A1A1A] group-hover:text-[#5A5A40] transition-colors">
                              {resource.title}
                            </h4>
                          </a>
                        ))}
                      </div>
                    </section>

                    <div className="p-8 bg-[#F5F5F0] rounded-3xl border border-[#1A1A1A]/5 relative overflow-hidden">
                      <Layout className="absolute -right-4 -bottom-4 w-24 h-24 opacity-5" />
                      <h4 className="text-sm font-bold mb-2">Pro Tip</h4>
                      <p className="text-xs text-[#1A1A1A]/60 leading-relaxed italic">
                        "Automation is not about replacing testers, but about giving them superpowers to focus on complex explorative testing."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#1A1A1A]/5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/30">
          Built for the next generation of SDETs
        </p>
      </footer>
    </div>
  );
}
