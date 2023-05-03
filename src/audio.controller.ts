import { Note } from './types/types';
import A from './assets/A5.mp3';
import Ab from './assets/Ab5.mp3';
import B from './assets/B5.mp3';
import Bb from './assets/Ab5.mp3';
import C from './assets/C5.mp3';
import D from './assets/D5.mp3';
import Db from './assets/Db5.mp3';
import E from './assets/E5.mp3';
import Eb from './assets/Eb5.mp3';
import F from './assets/F5.mp3';
import G from './assets/G5.mp3';
import Gb from './assets/Gb5.mp3';

export class AudioController {
  getNoteAudioFile = (note: Note | string) => {
    const Sounds = {
      A,
      Ab,
      B,
      Bb,
      C,
      D,
      Db,
      E,
      Eb,
      F,
      G,
      Gb,
    };
    const audio = Sounds[note as keyof Object];

    return String(audio);
  };

  getNotesByChord = (chord: string) => {
    const Chords = {
      Cmaj: ['C', 'E', 'G'],
      Fmaj: ['F', 'A', 'C'],
      Amin: ['A', 'C', 'E'],
      Gmaj: ['G', 'B', 'D'],
    };

    // @ts-ignore
    return Chords[chord as keyof Object];
  };

  playNote = (note: Note) => {
    return new Promise<void>(async (res) => {
      const sound = new Audio(note);
      sound.playbackRate = 2;
      sound.play();
      sound.onended = () => res();
    });
  };
}
