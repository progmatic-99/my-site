import { IconButton, Icon } from "@chakra-ui/react";
import { HiPlay, HiStop } from "react-icons/hi";
import { useAudio } from "react-use";

const HeroPlay = () => {
  const [audio, state, controls, ref] = useAudio({
    src: "/rick-roll.mp3",
    autoPlay: false
  })

  const play = () => {
    controls.play();
  }

  const stop = () => {
    controls.pause();
    controls.seek(0);
  }

  const toggle = () => {
    if (state.playing) {
      stop();
    } else {
      play();
    }
  }

  return (
    <>
      {audio}
      <IconButton
        aria-label='Play intro song'
        icon={<Icon
          color="purple.500"
          as={state.playing ? HiStop : HiPlay}
          p={0}
          w={{ base: 12, md: 8 }}
          h={{ base: 12, md: 8 }}
          onClick={toggle}
        />}
        variant="unstyled"
        rounded="full"
        size="lg"
      />
    </>
  )
}

export default HeroPlay;