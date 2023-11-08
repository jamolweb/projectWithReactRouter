import {
    Box,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Text,
    Slider,
    Button,
    Flex
} from '@chakra-ui/react'

const Sidebar = () => {
    return (
        <Box display={{ base: 'none', md: 'block' }} p={'10px'} mt={'10px'} bg={'white'} w={'280px'}>
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
    )
}

export default Sidebar