import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type LikesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TimerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PomodoroMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChapterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TopicMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Likes {
  readonly id: string;
  readonly Notes?: (Notes | null)[] | null;
  readonly Comments?: (Comments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Likes, LikesMetaData>);
  static copyOf(source: Likes, mutator: (draft: MutableModel<Likes, LikesMetaData>) => MutableModel<Likes, LikesMetaData> | void): Likes;
}

export declare class Notes {
  readonly id: string;
  readonly description?: string | null;
  readonly notesImage?: string | null;
  readonly userID?: string | null;
  readonly chapterID?: string | null;
  readonly topicID?: string | null;
  readonly subjectID?: string | null;
  readonly commentsID?: string | null;
  readonly likesID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Notes, NotesMetaData>);
  static copyOf(source: Notes, mutator: (draft: MutableModel<Notes, NotesMetaData>) => MutableModel<Notes, NotesMetaData> | void): Notes;
}

export declare class Comments {
  readonly id: string;
  readonly comment?: string | null;
  readonly Notes?: (Notes | null)[] | null;
  readonly likesID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comments, CommentsMetaData>);
  static copyOf(source: Comments, mutator: (draft: MutableModel<Comments, CommentsMetaData>) => MutableModel<Comments, CommentsMetaData> | void): Comments;
}

export declare class Todo {
  readonly id: string;
  readonly start?: number | null;
  readonly end?: number | null;
  readonly subjectID?: string | null;
  readonly topicID?: string | null;
  readonly chapterID?: string | null;
  readonly userID?: string | null;
  readonly status?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class Timer {
  readonly id: string;
  readonly start?: number | null;
  readonly end?: number | null;
  readonly Users?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Timer, TimerMetaData>);
  static copyOf(source: Timer, mutator: (draft: MutableModel<Timer, TimerMetaData>) => MutableModel<Timer, TimerMetaData> | void): Timer;
}

export declare class User {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly gender?: string | null;
  readonly profilePicture?: string | null;
  readonly examDetails?: string | null;
  readonly examDates?: string | null;
  readonly Notes?: (Notes | null)[] | null;
  readonly subjectID?: string | null;
  readonly pomodoroID?: string | null;
  readonly timerID?: string | null;
  readonly Todos?: (Todo | null)[] | null;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Pomodoro {
  readonly id: string;
  readonly start?: number | null;
  readonly end?: number | null;
  readonly Users?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Pomodoro, PomodoroMetaData>);
  static copyOf(source: Pomodoro, mutator: (draft: MutableModel<Pomodoro, PomodoroMetaData>) => MutableModel<Pomodoro, PomodoroMetaData> | void): Pomodoro;
}

export declare class Subject {
  readonly id: string;
  readonly subjectName?: string | null;
  readonly status?: boolean | null;
  readonly Users?: (User | null)[] | null;
  readonly Notes?: (Notes | null)[] | null;
  readonly Todos?: (Todo | null)[] | null;
  readonly Chapters?: (Chapter | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Subject, SubjectMetaData>);
  static copyOf(source: Subject, mutator: (draft: MutableModel<Subject, SubjectMetaData>) => MutableModel<Subject, SubjectMetaData> | void): Subject;
}

export declare class Chapter {
  readonly id: string;
  readonly chapterName?: string | null;
  readonly status?: boolean | null;
  readonly Notes?: (Notes | null)[] | null;
  readonly Todos?: (Todo | null)[] | null;
  readonly subjectID?: string | null;
  readonly Topics?: (Topic | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Chapter, ChapterMetaData>);
  static copyOf(source: Chapter, mutator: (draft: MutableModel<Chapter, ChapterMetaData>) => MutableModel<Chapter, ChapterMetaData> | void): Chapter;
}

export declare class Topic {
  readonly id: string;
  readonly topicName?: string | null;
  readonly status?: boolean | null;
  readonly Notes?: (Notes | null)[] | null;
  readonly Todos?: (Todo | null)[] | null;
  readonly chapterID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Topic, TopicMetaData>);
  static copyOf(source: Topic, mutator: (draft: MutableModel<Topic, TopicMetaData>) => MutableModel<Topic, TopicMetaData> | void): Topic;
}