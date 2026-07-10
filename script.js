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
    
    const chNameBorders = document.querySelectorAll('.info-name');
    chNameBorders.forEach(el => el.style.borderColor = nextColor);
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


document.getElementById('in-pair-name').addEventListener('input', (e) => {
    document.getElementById('out-pair-name').textContent = e.target.value;
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

document.getElementById('in-story1-title').addEventListener('input', (e) => document.getElementById('out-story1-title').textContent = e.target.value);
document.getElementById('in-story1-content').addEventListener('input', (e) => document.getElementById('out-story1-content').textContent = e.target.value);
document.getElementById('in-story2-title').addEventListener('input', (e) => document.getElementById('out-story2-title').textContent = e.target.value);
document.getElementById('in-story2-content').addEventListener('input', (e) => document.getElementById('out-story2-content').textContent = e.target.value);
document.getElementById('in-story3-title').addEventListener('input', (e) => document.getElementById('out-story3-title').textContent = e.target.value);
document.getElementById('in-story3-content').addEventListener('input', (e) => document.getElementById('out-story3-content').textContent = e.target.value);
document.getElementById('in-story4-title').addEventListener('input', (e) => document.getElementById('out-story4-title').textContent = e.target.value);
document.getElementById('in-story4-content').addEventListener('input', (e) => document.getElementById('out-story4-content').textContent = e.target.value);

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

document.getElementById('btn-save').addEventListener('click', () => {
    const area = document.getElementById('capture-area');
    html2canvas(area, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'relationship_timeline_card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});