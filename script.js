const inputDot1 = document.getElementById('input-dot1-color');
const inputDot2 = document.getElementById('input-dot2-color');
const inputDot3 = document.getElementById('input-dot3-color');

const outDot1 = document.getElementById('out-dot1');
const outDot2 = document.getElementById('out-dot2');
const outDot3 = document.getElementById('out-dot3');
const btnSave = document.getElementById('btn-save');

inputDot1.addEventListener('input', (e) => outDot1.style.backgroundColor = e.target.value);
inputDot2.addEventListener('input', (e) => outDot2.style.backgroundColor = e.target.value);
inputDot3.addEventListener('input', (e) => {
    const nextColor = e.target.value;
    outDot3.style.backgroundColor = nextColor;
    btnSave.style.backgroundColor = nextColor;
});

const inputBoxBg = document.getElementById('input-box-bg');
const inputBoxTitleColor = document.getElementById('input-box-title-color');
const inputBoxTextColor = document.getElementById('input-box-text-color');

const outMainBox = document.getElementById('out-main-box');
const outMainTitle = document.getElementById('out-main-title');
const outMainContent = document.getElementById('out-main-content');

inputBoxBg.addEventListener('input', (e) => outMainBox.style.backgroundColor = e.target.value);
inputBoxTitleColor.addEventListener('input', (e) => outMainTitle.style.color = e.target.value);
inputBoxTextColor.addEventListener('input', (e) => outMainContent.style.color = e.target.value);

const inputStoryTitleBg = document.getElementById('input-story-title-bg');
const inputStoryTitleColor = document.getElementById('input-story-title-color');

inputStoryTitleBg.addEventListener('input', (e) => {
    const wraps = document.querySelectorAll('.story-header-wrap');
    wraps.forEach(wrap => wrap.style.backgroundColor = e.target.value);
});

inputStoryTitleColor.addEventListener('input', (e) => {
    const wraps = document.querySelectorAll('.story-header-wrap');
    wraps.forEach(wrap => wrap.style.color = e.target.value);
});

const inputBadgeABg = document.getElementById('input-badge-a-bg');
const inputBadgeBBg = document.getElementById('input-badge-b-bg');
const inputBadgeColor = document.getElementById('input-badge-color');

const outCh1Badge = document.getElementById('out-ch1-badge');
const outCh2Badge = document.getElementById('out-ch2-badge');

inputBadgeABg.addEventListener('input', (e) => outCh1Badge.style.backgroundColor = e.target.value);
inputBadgeBBg.addEventListener('input', (e) => outCh2Badge.style.backgroundColor = e.target.value);
inputBadgeColor.addEventListener('input', (e) => {
    outCh1Badge.style.color = e.target.value;
    outCh2Badge.style.color = e.target.value;
});

const inputChatABg = document.getElementById('input-chat-a-bg');
const inputChatAColor = document.getElementById('input-chat-a-color');
const inputChatBBg = document.getElementById('input-chat-b-bg');
const inputChatBColor = document.getElementById('input-chat-b-color');

inputChatABg.addEventListener('input', (e) => {
    document.querySelectorAll('.bubble-a').forEach(b => b.style.backgroundColor = e.target.value);
});
inputChatAColor.addEventListener('input', (e) => {
    document.querySelectorAll('.bubble-a').forEach(b => b.style.color = e.target.value);
});
inputChatBBg.addEventListener('input', (e) => {
    document.querySelectorAll('.bubble-b').forEach(b => b.style.backgroundColor = e.target.value);
});
inputChatBColor.addEventListener('input', (e) => {
    document.querySelectorAll('.bubble-b').forEach(b => b.style.color = e.target.value);
});


document.getElementById('in-pair-name').addEventListener('input', (e) => {
    document.getElementById('out-pair-name').textContent = e.target.value;
});

document.getElementById('in-ch1-badge').addEventListener('input', (e) => {
    document.getElementById('out-ch1-badge').textContent = e.target.value || "CHARACTER A";
});
document.getElementById('in-ch2-badge').addEventListener('input', (e) => {
    document.getElementById('out-ch2-badge').textContent = e.target.value || "CHARACTER B";
});

document.getElementById('in-ch1-name').addEventListener('input', (e) => document.getElementById('out-ch1-name').textContent = e.target.value);
document.getElementById('in-ch1-age').addEventListener('input', (e) => document.getElementById('out-ch1-age').textContent = e.target.value);
document.getElementById('in-ch1-gender').addEventListener('input', (e) => document.getElementById('out-ch1-gender').textContent = e.target.value);
document.getElementById('in-ch1-desc').addEventListener('input', (e) => {
    document.getElementById('out-ch1-desc').textContent = e.target.value;
});

document.getElementById('in-ch2-name').addEventListener('input', (e) => document.getElementById('out-ch2-name').textContent = e.target.value);
document.getElementById('in-ch2-age').addEventListener('input', (e) => document.getElementById('out-ch2-age').textContent = e.target.value);
document.getElementById('in-ch2-gender').addEventListener('input', (e) => document.getElementById('out-ch2-gender').textContent = e.target.value);
document.getElementById('in-ch2-desc').addEventListener('input', (e) => {
    document.getElementById('out-ch2-desc').textContent = e.target.value;
});

document.getElementById('in-rel-top').addEventListener('input', (e) => document.getElementById('out-rel-top').textContent = e.target.value);
document.getElementById('in-rel-bot').addEventListener('input', (e) => document.getElementById('out-rel-bot').textContent = e.target.value);
document.getElementById('in-circle-rel-top').addEventListener('input', (e) => document.getElementById('out-circle-rel-top').textContent = e.target.value);
document.getElementById('in-circle-rel-bot').addEventListener('input', (e) => document.getElementById('out-circle-rel-bot').textContent = e.target.value);

document.getElementById('in-main-title').addEventListener('input', (e) => document.getElementById('out-main-title').textContent = e.target.value);
document.getElementById('in-main-content').addEventListener('input', (e) => document.getElementById('out-main-content').textContent = e.target.value);

const stories = [1, 2, 3, 4];
stories.forEach(num => {
    document.getElementById(`in-story${num}-title`).addEventListener('input', (e) => {
        document.getElementById(`out-story${num}-title`).textContent = e.target.value;
    });
    document.getElementById(`in-story${num}-content`).addEventListener('input', (e) => {
        const descText = document.getElementById(`out-story${num}-content`);
        descText.textContent = e.target.value;
        descText.style.display = e.target.value.trim() === "" ? "none" : "block";
    });
    document.getElementById(`in-story${num}-chat-a`).addEventListener('input', (e) => {
        const bubble = document.getElementById(`out-story${num}-chat-a`);
        bubble.textContent = e.target.value;
        bubble.style.display = e.target.value.trim() === "" ? "none" : "inline-block";
    });
    document.getElementById(`in-story${num}-chat-b`).addEventListener('input', (e) => {
        const bubble = document.getElementById(`out-story${num}-chat-b`);
        bubble.textContent = e.target.value;
        bubble.style.display = e.target.value.trim() === "" ? "none" : "inline-block";
    });
});

const inputFont = document.getElementById('input-font');
const mainLayout = document.querySelector('.main-layout');
inputFont.addEventListener('change', (e) => {
    mainLayout.style.fontFamily = e.target.value;
});

setupImagePreview('in-top-banner', 'out-top-banner', true);
setupImagePreview('in-ch1-img', 'out-ch1-img-slot', false);
setupImagePreview('in-ch2-img', 'out-ch2-img-slot', false);
setupImagePreview('in-circle1-img', 'out-circle1-img', false);
setupImagePreview('in-circle2-img', 'out-circle2-img', false);
setupImagePreview('in-bottom-large-img', 'out-bottom-large-img', true);

function setupImagePreview(inputId, slotId, clearText) {
    document.getElementById(inputId).addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const targetSlot = document.getElementById(slotId);
                targetSlot.style.backgroundImage = `url('${event.target.result}')`;
                if(clearText) {
                    targetSlot.innerHTML = '';
                }
            };
            reader.readAsDataURL(file);
        }
    });
}

const inputBannerY = document.getElementById('input-banner-y');
const outTopBanner = document.getElementById('out-top-banner');
inputBannerY.addEventListener('input', (e) => {
    outTopBanner.style.backgroundPosition = `center ${e.target.value}%`;
});

const inputLargeImgX = document.getElementById('input-large-img-x');
const inputLargeImgY = document.getElementById('input-large-img-y');
const outBottomLargeImg = document.getElementById('out-bottom-large-img');

let imgPosX = 50;
let imgPosY = 50;

function updateLargeImgPosition() {
    outBottomLargeImg.style.backgroundPosition = `${imgPosX}% ${imgPosY}%`;
}

inputLargeImgX.addEventListener('input', (e) => {
    imgPosX = e.target.value;
    updateLargeImgPosition();
});

inputLargeImgY.addEventListener('input', (e) => {
    imgPosY = e.target.value;
    updateLargeImgPosition();
});

document.getElementById('btn-save').addEventListener('click', () => {
    const area = document.getElementById('capture-area');
    html2canvas(area, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'pair_timeline.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});