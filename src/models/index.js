// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Likes, Notes, Comments, Todo, Timer, UserProfile, Pomodoro, Subject, Topic, Chapter } = initSchema(schema);

export {
  Likes,
  Notes,
  Comments,
  Todo,
  Timer,
  UserProfile,
  Pomodoro,
  Subject,
  Topic,
  Chapter
};