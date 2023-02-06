import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

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

type UserProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PomodoroMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TopicMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChapterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerLikes = {
  readonly id: string;
  readonly Notes?: (Notes | null)[] | null;
  readonly Comments?: (Comments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLikes = {
  readonly id: string;
  readonly Notes: AsyncCollection<Notes>;
  readonly Comments: AsyncCollection<Comments>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Likes = LazyLoading extends LazyLoadingDisabled ? EagerLikes : LazyLikes

export declare const Likes: (new (init: ModelInit<Likes, LikesMetaData>) => Likes) & {
  copyOf(source: Likes, mutator: (draft: MutableModel<Likes, LikesMetaData>) => MutableModel<Likes, LikesMetaData> | void): Likes;
}

type EagerNotes = {
  readonly id: string;
  readonly description?: string | null;
  readonly notesImage?: string | null;
  readonly userID: string;
  readonly chapterID?: string | null;
  readonly topicID?: string | null;
  readonly subjectID?: string | null;
  readonly commentsID?: string | null;
  readonly likesID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotes = {
  readonly id: string;
  readonly description?: string | null;
  readonly notesImage?: string | null;
  readonly userID: string;
  readonly chapterID?: string | null;
  readonly topicID?: string | null;
  readonly subjectID?: string | null;
  readonly commentsID?: string | null;
  readonly likesID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notes = LazyLoading extends LazyLoadingDisabled ? EagerNotes : LazyNotes

export declare const Notes: (new (init: ModelInit<Notes, NotesMetaData>) => Notes) & {
  copyOf(source: Notes, mutator: (draft: MutableModel<Notes, NotesMetaData>) => MutableModel<Notes, NotesMetaData> | void): Notes;
}

type EagerComments = {
  readonly id: string;
  readonly comment?: string | null;
  readonly Notes?: (Notes | null)[] | null;
  readonly likesID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComments = {
  readonly id: string;
  readonly comment?: string | null;
  readonly Notes: AsyncCollection<Notes>;
  readonly likesID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comments = LazyLoading extends LazyLoadingDisabled ? EagerComments : LazyComments

export declare const Comments: (new (init: ModelInit<Comments, CommentsMetaData>) => Comments) & {
  copyOf(source: Comments, mutator: (draft: MutableModel<Comments, CommentsMetaData>) => MutableModel<Comments, CommentsMetaData> | void): Comments;
}

type EagerTodo = {
  readonly id: string;
  readonly start?: number | null;
  readonly end?: number | null;
  readonly subjectID?: string | null;
  readonly topicID?: string | null;
  readonly chapterID?: string | null;
  readonly userID: string;
  readonly status?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly id: string;
  readonly start?: number | null;
  readonly end?: number | null;
  readonly subjectID?: string | null;
  readonly topicID?: string | null;
  readonly chapterID?: string | null;
  readonly userID: string;
  readonly status?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo, TodoMetaData>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

type EagerTimer = {
  readonly id: string;
  readonly start?: number | null;
  readonly end?: number | null;
  readonly Users?: (UserProfile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTimer = {
  readonly id: string;
  readonly start?: number | null;
  readonly end?: number | null;
  readonly Users: AsyncCollection<UserProfile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Timer = LazyLoading extends LazyLoadingDisabled ? EagerTimer : LazyTimer

export declare const Timer: (new (init: ModelInit<Timer, TimerMetaData>) => Timer) & {
  copyOf(source: Timer, mutator: (draft: MutableModel<Timer, TimerMetaData>) => MutableModel<Timer, TimerMetaData> | void): Timer;
}

type EagerUserProfile = {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly gender?: string | null;
  readonly profilePicture?: string | null;
  readonly examDetails?: string | null;
  readonly examDates?: string | null;
  readonly Notes?: (Notes | null)[] | null;
  readonly subjectID: string;
  readonly pomodoroID: string;
  readonly timerID: string;
  readonly Todos?: (Todo | null)[] | null;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly gender?: string | null;
  readonly profilePicture?: string | null;
  readonly examDetails?: string | null;
  readonly examDates?: string | null;
  readonly Notes: AsyncCollection<Notes>;
  readonly subjectID: string;
  readonly pomodoroID: string;
  readonly timerID: string;
  readonly Todos: AsyncCollection<Todo>;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile, UserProfileMetaData>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile, UserProfileMetaData>) => MutableModel<UserProfile, UserProfileMetaData> | void): UserProfile;
}

type EagerPomodoro = {
  readonly id: string;
  readonly start?: number | null;
  readonly end?: number | null;
  readonly Users?: (UserProfile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPomodoro = {
  readonly id: string;
  readonly start?: number | null;
  readonly end?: number | null;
  readonly Users: AsyncCollection<UserProfile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pomodoro = LazyLoading extends LazyLoadingDisabled ? EagerPomodoro : LazyPomodoro

export declare const Pomodoro: (new (init: ModelInit<Pomodoro, PomodoroMetaData>) => Pomodoro) & {
  copyOf(source: Pomodoro, mutator: (draft: MutableModel<Pomodoro, PomodoroMetaData>) => MutableModel<Pomodoro, PomodoroMetaData> | void): Pomodoro;
}

type EagerSubject = {
  readonly id: string;
  readonly subjectName?: string | null;
  readonly status?: boolean | null;
  readonly Users?: (UserProfile | null)[] | null;
  readonly Notes?: (UserProfile | null)[] | null;
  readonly Todos?: (UserProfile | null)[] | null;
  readonly Chapters?: (UserProfile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubject = {
  readonly id: string;
  readonly subjectName?: string | null;
  readonly status?: boolean | null;
  readonly Users: AsyncCollection<UserProfile>;
  readonly Notes: AsyncCollection<UserProfile>;
  readonly Todos: AsyncCollection<UserProfile>;
  readonly Chapters: AsyncCollection<UserProfile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Subject = LazyLoading extends LazyLoadingDisabled ? EagerSubject : LazySubject

export declare const Subject: (new (init: ModelInit<Subject, SubjectMetaData>) => Subject) & {
  copyOf(source: Subject, mutator: (draft: MutableModel<Subject, SubjectMetaData>) => MutableModel<Subject, SubjectMetaData> | void): Subject;
}

type EagerTopic = {
  readonly id: string;
  readonly topicName?: string | null;
  readonly status?: boolean | null;
  readonly Notes?: (Notes | null)[] | null;
  readonly Todos?: (Todo | null)[] | null;
  readonly chapterID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTopic = {
  readonly id: string;
  readonly topicName?: string | null;
  readonly status?: boolean | null;
  readonly Notes: AsyncCollection<Notes>;
  readonly Todos: AsyncCollection<Todo>;
  readonly chapterID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Topic = LazyLoading extends LazyLoadingDisabled ? EagerTopic : LazyTopic

export declare const Topic: (new (init: ModelInit<Topic, TopicMetaData>) => Topic) & {
  copyOf(source: Topic, mutator: (draft: MutableModel<Topic, TopicMetaData>) => MutableModel<Topic, TopicMetaData> | void): Topic;
}

type EagerChapter = {
  readonly id: string;
  readonly chapterName?: string | null;
  readonly status?: boolean | null;
  readonly Notes?: (Notes | null)[] | null;
  readonly Todos?: (Todo | null)[] | null;
  readonly subjectID?: string | null;
  readonly Topics?: (Topic | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChapter = {
  readonly id: string;
  readonly chapterName?: string | null;
  readonly status?: boolean | null;
  readonly Notes: AsyncCollection<Notes>;
  readonly Todos: AsyncCollection<Todo>;
  readonly subjectID?: string | null;
  readonly Topics: AsyncCollection<Topic>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Chapter = LazyLoading extends LazyLoadingDisabled ? EagerChapter : LazyChapter

export declare const Chapter: (new (init: ModelInit<Chapter, ChapterMetaData>) => Chapter) & {
  copyOf(source: Chapter, mutator: (draft: MutableModel<Chapter, ChapterMetaData>) => MutableModel<Chapter, ChapterMetaData> | void): Chapter;
}