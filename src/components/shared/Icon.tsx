import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  Building2,
  CalendarClock,
  CalendarHeart,
  CheckCircle2,
  ClipboardList,
  Coins,
  FileX,
  Globe2,
  GraduationCap,
  ListChecks,
  MapPin,
  Megaphone,
  MessageSquare,
  Repeat,
  ShieldCheck,
  Sparkles,
  Sun,
  Timer,
  Trophy,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const map: Record<string, LucideIcon> = {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  Building2,
  CalendarClock,
  CalendarHeart,
  CheckCircle2,
  ClipboardList,
  Coins,
  FileX,
  Globe2,
  GraduationCap,
  ListChecks,
  MapPin,
  Megaphone,
  MessageSquare,
  Repeat,
  ShieldCheck,
  Sparkles,
  Sun,
  Timer,
  Trophy,
  TrendingUp,
  Users,
  Zap,
};

export default function Icon({
  name,
  className = 'h-5 w-5',
}: {
  name: string;
  className?: string;
}) {
  const C = map[name] ?? Sparkles;
  return <C className={className} />;
}
