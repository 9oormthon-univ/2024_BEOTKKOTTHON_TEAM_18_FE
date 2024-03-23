export interface DdeepInfo {
  recruitmentIdx: number;
  type: string;
  name: string;
  leader: string;
  participantNumber: number;
  participantLimit: number;
  description: string;
  isLeader: boolean;
  isDone: boolean;
  isParticipating: boolean;
}

type Comment = {
  commentIdx: number;
  writer: string;
  createdDate: string;
  content: string;
};

export type Notification = {
  notificationIdx: number;
  name: string;
  contactUrl: string;
  leader: string;
  participantNumber: number;
  participantLimit: number;
  description: string;
};

export interface DdeepDetail {
  recruitment: {
    recruitmentIdx: number;
    type: string;
    name: string;
    leader: string;
    participantNumber: number;
    participantLimit: number;
    description: string;
    isLeader: boolean;
    isRecruiting: boolean;
  };
  commentCount: number;
  commentList: Comment[];
}
