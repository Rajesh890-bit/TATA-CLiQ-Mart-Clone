import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  Input,
  Checkbox,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CHECK_BOX, LEFT } from "../../Constants/typography";
import { CheckFilter } from "../CheckFilter";
function Filter({ data, setFilters }) {
  let allFilters = data?.map(({ name, options }) => {
    return (
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign={LEFT}>
              {name}
            </Box>
            <AiOutlinePlus />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Wrap>
            {options.map((el) => (
              <CheckFilter name={el} setFilters={setFilters} />
            ))}
          </Wrap>
        </AccordionPanel>
      </AccordionItem>
    );
  });

  return <Accordion>{allFilters}</Accordion>;
}

export default React.memo(Filter);
