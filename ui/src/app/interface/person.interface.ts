import { Stage } from '../other/typesAndConsts';

export interface PrincipalBasicData {
  id: number;
  login: string;
  email: string;
  timerStage: Stage;
  timerSelectedTopic: string;
  timerSetHours: number;
  timerSetMinutes: number;
  timerSetSeconds: number;
  timerShortBreak: number;
  timerLongBreak: number;
  timerAutoBreak: boolean;
  stopWatchAutoBreak: boolean;
  timerRemainingTime: number;
  timerInterval: number;
}
