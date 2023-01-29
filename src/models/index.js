// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Likes, Notes, Comments, Todo, Timer, User, Pomodoro, Subject, Chapter, Topic } = initSchema(schema);

export {
  Likes,
  Notes,
  Comments,
  Todo,
  Timer,
  User,
  Pomodoro,
  Subject,
  Chapter,
  Topic
};