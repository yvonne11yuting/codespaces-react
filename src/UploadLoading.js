import Stack from "@mui/material/Stack";
import TextFlashAnimation from './TextFlashAnimation';

function UploadLoading() {
    const emojiList = ['😀', '😄', '😆', '🥹', '😂', '🤣', '😊', '🙂', '😉', '😘', '🥰', '😌', '😗', '😎', '🥸', '🤩', '🥳'];

    return (
        <Stack alignItems="center" justifyContent="center" gap={2} textAlign="center" mt={10}>
            <TextFlashAnimation itemList={emojiList} duration={10} />
            處理中...
        </Stack>
    )
}

export default UploadLoading;
