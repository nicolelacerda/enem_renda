const data2013 = [
    { renda: 'Nenhuma renda', media: 450.7 },
    { renda: 'Até R$678', media: 463.6 },
    { renda: 'Até R$1.017', media: 489.7 },
    { renda: 'Até R$1.356', media: 501.8 },
    { renda: 'Até R$1.695', media: 511.6 },
    { renda: 'Até R$2.034', media: 521.5 },
    { renda: 'Até R$2.712', media: 533.2 },
    { renda: 'Até R$3.390', media: 545.2 },
    { renda: 'Até R$4.068', media: 558.5 },
    { renda: 'Até R$4.746', media: 567.4 },
    { renda: 'Até R$5.424', media: 572.2 },
    { renda: 'Até R$6.102', media: 580.2 },
    { renda: 'Até R$6.780', media: 588.7 },
    { renda: 'Até R$8.136', media: 595.3 },
    { renda: 'Até R$10.170', media: 601.4 },
    { renda: 'Até R$13.560', media: 611.3 },
    { renda: 'Mais de R$13.560', media: 621.3 }
  ];
 
  const data2023 = [
    { renda: 'Nenhuma renda', media: 479.3 },
    { renda: 'Até R$1.320', media: 500.8 },
    { renda: 'Até R$1.980', media: 526.7 },
    { renda: 'Até R$2.640', media: 540.7 },
    { renda: 'Até R$3.300', media: 553 },
    { renda: 'Até R$3.960', media: 564.3 },
    { renda: 'Até R$5.280', media: 575.7 },
    { renda: 'Até R$6.600', media: 587.7 },
    { renda: 'Até R$7.920', media: 595.8 },
    { renda: 'Até R$9.240', media: 603.5 },
    { renda: 'Até R$10.560', media: 608.7 },
    { renda: 'Até R$11.880', media: 613.7 },
    { renda: 'Até R$13.200', media: 621.2 },
    { renda: 'Até R$15.840', media: 624.1 },
    { renda: 'Até R$19.800', media: 629.3 },
    { renda: 'Até R$26.400', media: 637.5 },
    { renda: 'Mais de R$26.400', media: 642.9 }
  ];
 
  function getBlueGradient(media) {
    const ratio = (media - 450) / (650 - 450);
    const r = Math.floor(173 * (1 - ratio));
    const g = Math.floor(216 * (1 - ratio));
    const b = Math.floor(230 * (1 - ratio) + 139 * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  }
 
  function getBlueGradient(media) {
    const ratio = (media - 450) / (650 - 450);
    const r = Math.floor(173 * (1 - ratio));
    const g = Math.floor(216 * (1 - ratio));
    const b = Math.floor(230 * (1 - ratio) + 139 * ratio);
    return `rgb(${r}, ${g}, ${b})`;
}


function buildThermometer(id, data) {
    const container = document.getElementById(id);
    const maxMedia = 650;
    data.forEach(d => {
        const level = document.createElement('div');
        level.className = 'fill';
        level.style.height = (d.media / maxMedia * 100 / data.length) + '%';
        level.style.background = getBlueGradient(d.media);
        level.title = `${d.renda}: ${d.media}`;
        level.addEventListener('mouseenter', (e) => showTooltip(e, d));
        level.addEventListener('mouseleave', hideTooltip);
        container.appendChild(level);
    });
}


function showTooltip(e, data) {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = `<strong>${data.renda}</strong><br>Média: ${data.media}`;
    tooltip.style.left = e.pageX + 'px';
    tooltip.style.top = e.pageY - 40 + 'px';
    tooltip.style.display = 'block';
}


function hideTooltip() {
    document.getElementById('tooltip').style.display = 'none';
}


buildThermometer('thermo2013', data2013);
buildThermometer('thermo2023', data2023);
