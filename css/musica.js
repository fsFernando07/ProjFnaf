import { useEffect } from 'react';
import { Audio } from 'expo-av';

export function playMusic() {
    useEffect(() => {
        const playBackgroundMusic = async () => {
            const { sound } = await Audio.Sound.createAsync(require('../assets/musica.mp3'), {
                shouldPlay: true,
                isLooping: true,
            });
        };
        playBackgroundMusic();
        return () => {
            sound.unloadAsync();
        };
    }, []);
    return playMusic;
}