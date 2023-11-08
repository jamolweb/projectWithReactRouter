import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text,
} from "@chakra-ui/react"
import { LiaTelegramPlane } from 'react-icons/lia'
import { AiOutlineSearch, AiFillTwitterCircle } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi'


export default () => {
    return (
        <Box mt={'100px'} color={'white'} padding={'50px 50px 50px 0px'} w={'100%'} bg={'#3A8F34'}>
            <Grid w={{ base: '98%', md: '95%', xl: '93%', '2xl': '90%' }} templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)', xl: 'repeat(4,1fr)', '2xl': 'repeat(5,1fr)', }} gap={{ base: '30px', md: '20px' }} m={'40px auto'}>
                <GridItem>
                    <Heading>CompanyName</Heading>
                    <Flex>
                        <BiLogoFacebookCircle fontSize={'30px'} />
                        <BiLogoInstagram fontSize={'30px'} />
                        <BiLogoYoutube fontSize={'30px'} />
                        <AiFillTwitterCircle fontSize={'30px'} />
                    </Flex>
                </GridItem>
                <GridItem>
                    Трубчатые радиаторы <br />
                    Биметаллические радиаторы  <br />
                    Алюминиевые радиаторы <br />
                    Панельные радиаторы <br />
                    Полотенцесушители <br />
                </GridItem>
                <GridItem>
                    Внутрипольные конвекторы <br />
                    Напольные конвекторы <br />
                    Тёплые полы <br />
                    Комплектующие <br />
                    Бренды <br />
                </GridItem>
                <GridItem>
                    Трубчатые радиаторы <br />
                    Биметаллические радиаторы  <br />
                    Алюминиевые радиаторы <br />
                    Панельные радиаторы <br />
                    Полотенцесушители <br />
                </GridItem>
                <GridItem gap={'10px'} display={'flex'} flexDirection={'column'}>
                    <InputGroup>
                        <Input color={'white'} _placeholder={{ color: 'white' }} type='tel' placeholder='Поиск ' />
                        <InputRightElement>
                            <AiOutlineSearch />
                        </InputRightElement>
                    </InputGroup>
                    <Flex gap={'10px'} alignItems={'center'}>
                        <CiLocationOn color="white" fontSize={'30px'} />
                        <Box>
                            <Heading size={'sm'}>Москва, Павловская 16</Heading>
                            <Text>пн-пт 9:00-20:00</Text>
                        </Box>
                    </Flex>
                    <Flex p={'5px'} gap={'10px'} alignItems={'center'}>
                        <BsTelephone color="white" fontSize={'26px'} />
                        <Box>
                            <Heading size={'sm'}>+7 (977) 837-12-45</Heading>
                            <Text>mail@mail.ru</Text>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}