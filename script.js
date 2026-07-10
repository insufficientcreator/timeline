document.getElementById('in-pair-name').addEventListener('input', (e) => {
    document.getElementById('out-pair-name').textContent = e.target.value;
});

document.getElementById('in-ch1-name').addEventListener('input', (e) => document.getElementById('out-ch1-name').textContent = e.target.value);
document.getElementById('in-ch1-age').addEventListener('input', (e) => document.getElementById('out-ch1-age').textContent = e.target.value);
document.getElementById('in-ch1-gender').addEventListener('input', (e) => document.getElementById('out-ch1-gender').textContent = e.target.value);
document.getElementById('in-ch1-desc').addEventListener('input', (e) => {
    document.getElementById('out-ch1-desc').innerHTML = e.target.value.replace(/\n/g, '<br>');
});

document.getElementById('in-ch2-name').addEventListener('input', (e) => document.getElementById('out-ch2-name').textContent = e.target.value);
document.getElementById('in-ch2-age').addEventListener('input', (e) => document.getElementById('out-ch2-age').textContent = e.target.value);
document.getElementById('in-ch2-gender').addEventListener('input', (e) => document.getElementById('out-ch2-gender').textContent = e.target.value);
document.getElementById('in-ch2-desc').addEventListener('input', (e) => {
    document.getElementById('out-ch2-desc').innerHTML = e.target.value.replace(/\n/g, '<br>');
});

document.getElementById('in-rel-top').addEventListener('input', (e) => document.getElementById('out-rel-top').textContent = e.target.value);
document.getElementById('in-rel-bot').addEventListener('input', (e) => document.getElementById('out-rel-bot').textContent = e.target.value);

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