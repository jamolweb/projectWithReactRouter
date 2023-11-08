import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Text,
    Slider,
    Button,
    Flex
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Sidebar from './sidebar'

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button bg={'transparent'} display={{ base: 'flex', md: 'none' }} onClick={onOpen}>
                <Box mt={'200px'} w={'20px'} h={'320px'} bg={'#dddddd'} borderRadius={'0px 6px 6px 0 '} position={'absolute'} left={'-2'}></Box>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Box p={'10px'} mt={'10px'} bg={'white'} w={'240px'}>
                            <Box>
                                <Text fontWeight={'bold'}>ЦЕНА</Text>
                                <Slider aria-label='slider-ex-1' defaultValue={30}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                                <Text fontSize={'14px'} mt={'3px'} fontFamily={'fantasy'}>БРЕНД</Text>
                                <Text fontSize={'14px'} mt={'3px'} fontFamily={'fantasy'}>МОДЕЛЬ</Text>
                                <Text fontSize={'14px'} mt={'3px'} fontFamily={'fantasy'}>ТИП ПОДКЛЮЧЕНИЯ</Text>
                            </Box>
                            <Box mt={'25px'}>
                                <Text fontWeight={'bold'} fontFamily={'sans-serif'}>ВЫСОТА, ММ</Text>
                                <Slider aria-label='slider-ex-1' defaultValue={30}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                                <Flex>
                                    <Button>от 5</Button>
                                    <Button ml={'6px'}>до 3000</Button>
                                </Flex>
                                <Text fontSize={'14px'} mt={'3px'} fontFamily={'fantasy'}>ГЛУБИНА (КОЛИЧЕСТВО ТРУБ)</Text>
                                <Text fontSize={'14px'} mt={'3px'} fontFamily={'fantasy'}>ГЛУБИНА, ММ</Text>
                            </Box>
                            <Box mt={'25px'}>
                                <Text fontWeight={'bold'} fontFamily={'sans-serif'}>ВЫСОТА, ММ</Text>
                                <Slider aria-label='slider-ex-1' defaultValue={30}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                                <Flex>
                                    <Button>от 5</Button>
                                    <Button ml={'6px'}>до 3000</Button>
                                </Flex>
                                <Text fontSize={'14px'} mt={'3px'} fontFamily={'fantasy'}>ГЛУБИНА (КОЛИЧЕСТВО ТРУБ)</Text>
                                <Text fontSize={'14px'} mt={'3px'} fontFamily={'fantasy'}>ГЛУБИНА, ММ</Text>
                            </Box>
                            <Box mt={'25px'}>
                                <Text fontWeight={'bold'} fontFamily={'sans-serif'}>ВЫСОТА, ММ</Text>
                                <Slider aria-label='slider-ex-1' defaultValue={30}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                                <Flex>
                                    <Button>от 5</Button>
                                    <Button ml={'6px'}>до 3000</Button>
                                </Flex>
                                <Text fontSize={'14px'} mt={'3px'} fontFamily={'fantasy'}>ГЛУБИНА (КОЛИЧЕСТВО ТРУБ)</Text>
                                <Text fontSize={'14px'} mt={'3px'} fontFamily={'fantasy'}>ГЛУБИНА, ММ</Text>
                            </Box>
                            <Box mt={'25px'}>
                                <Text fontWeight={'bold'} fontFamily={'sans-serif'}>ВЫСОТА, ММ</Text>
                                <Slider aria-label='slider-ex-1' defaultValue={30}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                                <Flex>
                                    <Button>от 5</Button>
                                    <Button ml={'6px'}>до 3000</Button>
                                </Flex>
                                <Text fontSize={'14px'} mt={'3px'} fontFamily={'fantasy'}>ГЛУБИНА (КОЛИЧЕСТВО ТРУБ)</Text>
                                <Text fontSize={'14px'} mt={'3px'} fontFamily={'fantasy'}>ГЛУБИНА, ММ</Text>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default DrawerExample;