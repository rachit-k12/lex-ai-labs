'use client';

import {
  Bot,
  Brain,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers,
  MessageSquare,
  Rocket,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const fellowshipModules = [
  {
    icon: Brain,
    title: 'Machine Learning Foundations',
    weeks: '1-3',
    topics: ['Supervised & Unsupervised Learning', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    icon: Layers,
    title: 'Deep Learning',
    weeks: '4-6',
    topics: ['Neural Networks', 'CNNs & RNNs', 'Training at Scale'],
  },
  {
    icon: MessageSquare,
    title: 'Large Language Models',
    weeks: '7-9',
    topics: ['Transformer Architecture', 'Prompt Engineering', 'Fine-tuning LLMs'],
  },
  {
    icon: Bot,
    title: 'AI Agents & RAG',
    weeks: '10-12',
    topics: ['Agentic Systems', 'RAG Pipelines', 'Production Deployment'],
  },
];

const leadersModules = [
  {
    icon: Cpu,
    title: 'AI Strategy & Landscape',
    weeks: '1-2',
    topics: ['AI Market Overview', 'Use Case Identification', 'ROI Analysis'],
  },
  {
    icon: Database,
    title: 'Technical Foundations',
    weeks: '3-4',
    topics: ['ML Concepts for Leaders', 'Data Infrastructure', 'AI Team Building'],
  },
  {
    icon: Rocket,
    title: 'Implementation & Scale',
    weeks: '5-6',
    topics: ['Vendor Selection', 'Build vs Buy', 'Change Management'],
  },
  {
    icon: Zap,
    title: 'AI Governance',
    weeks: '7-8',
    topics: ['Ethics & Compliance', 'Risk Management', 'Future-Proofing'],
  },
];

function CurriculumContent({
  activeTab,
  setActiveTab,
}: {
  activeTab: 'fellowship' | 'leaders';
  setActiveTab: (tab: 'fellowship' | 'leaders') => void;
}) {
  const modules = activeTab === 'fellowship' ? fellowshipModules : leadersModules;
  const duration = activeTab === 'fellowship' ? '12 weeks' : '8 weeks';
  const format = activeTab === 'fellowship' ? 'For Engineers' : 'For Leaders';

  return (
    <div className="flex flex-col h-full">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('fellowship')}
          className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'fellowship'
              ? 'bg-neutral-900 text-white'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Code2 className="w-4 h-4" />
            AI Fellowship
          </div>
        </button>
        <button
          onClick={() => setActiveTab('leaders')}
          className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'leaders'
              ? 'bg-neutral-900 text-white'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Users className="w-4 h-4" />
            AI for Leaders
          </div>
        </button>
      </div>

      {/* Scrollable content */}
      <div
        className="flex-1 overflow-y-auto space-y-6"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {/* Program Info */}
        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-medium text-neutral-700 shadow-sm">
              <Sparkles className="w-3 h-3 text-coral-500" />
              {format}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-neutral-600">
              <Clock className="w-4 h-4" />
              {duration}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            {activeTab === 'fellowship' ? 'Build Production AI Systems' : 'Lead AI Transformation'}
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {activeTab === 'fellowship'
              ? 'Go from ML fundamentals to deploying AI agents. Hands-on projects, code reviews, and mentorship from engineers at Google, Amazon, and Microsoft.'
              : 'Understand AI deeply enough to make strategic decisions. Learn to evaluate, implement, and scale AI initiatives across your organization.'}
          </p>
        </div>

        {/* Modules */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
            Curriculum Modules
          </h4>
          <div className="space-y-3">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-5 h-5 text-coral-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1 gap-2">
                      <h5 className="font-medium text-neutral-900 text-sm md:text-base">
                        {module.title}
                      </h5>
                      <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                        Week {module.weeks}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {module.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded-md"
                        >
                          <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-neutral-900 rounded-2xl p-5 text-white">
          <h4 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
            Also Included
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Live Weekend Sessions',
              '1:1 Mentorship',
              'Project Reviews',
              'Career Guidance',
              'Private Slack Access',
              'Lifetime Community',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-coral-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CurriculumModal({ isOpen, onClose }: CurriculumModalProps) {
  const [activeTab, setActiveTab] = useState<'fellowship' | 'leaders'>('fellowship');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DrawerContent className="max-h-[90vh] bg-white">
          <DrawerHeader className="text-left pb-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-coral-500 to-coral-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <DrawerTitle className="text-lg font-semibold text-neutral-900">
                  Program Curriculum
                </DrawerTitle>
                <DrawerDescription className="text-sm text-neutral-500">
                  Choose your learning path
                </DrawerDescription>
              </div>
            </div>
          </DrawerHeader>
          <div
            className="px-4 pb-6 pt-4 overflow-y-auto max-h-[calc(90vh-120px)]"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <CurriculumContent activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[85vh] bg-white p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-coral-500 to-coral-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl font-semibold text-neutral-900">
                Program Curriculum
              </DialogTitle>
              <DialogDescription className="text-sm text-neutral-500">
                Choose your learning path
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div
          className="px-6 pb-6 pt-4 overflow-y-auto max-h-[calc(85vh-100px)]"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <CurriculumContent activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
