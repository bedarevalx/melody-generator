export class AudioController {
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
}
