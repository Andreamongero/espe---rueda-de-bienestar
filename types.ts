
export interface DimensionState {
  score: number;
  step: string;
}

export interface UserState {
  name: string;
  ageRange: string;
  gender: string;
  email: string;
}

export interface PostState {
  checkup: string;
  barrier: string;
}

export interface AppState {
  user: UserState;
  wheel: Record<string, DimensionState>;
  post: PostState;
}

export type AppAction =
  | { type: 'UPDATE_USER'; payload: Partial<UserState> }
  | { type: 'UPDATE_WHEEL_DIMENSION'; id: string; payload: Partial<DimensionState> }
  | { type: 'UPDATE_POST'; payload: Partial<PostState> }
  | { type: 'RESET_STATE' };

export interface Dimension {
  id: string;
  label: string;
  sub: string;
  icon: string;
  accent: string;
  bg: string;
  description: string;
  tip: string;
}
