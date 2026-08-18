const fs = require('fs');

let css = fs.readFileSync('app/home.css', 'utf8');

// Remove old process section css blocks safely
// It's a bit tricky with regex, so we'll just replace the exact known classes if we want, or use a naive regex
css = css.replace(/\.process-redesign-section \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.process-cards-grid \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.process-card-item \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.process-card-item:hover \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.process-card-top \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.process-card-item:hover \.process-step-num \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.process-card-item:hover \.process-icon-box \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.process-card-title \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.process-card-desc \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');

const newCSS = `
/* --- NEW PROCESS TIMELINE REDESIGN --- */
.process-redesign-section {
  padding: 100px 0;
  background: #ffffff;
  position: relative;
}

.process-redesign-shell {
  width: var(--shell-width);
  margin: 0 auto;
}

.process-header-wrap {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 70px;
}

.process-eyebrow-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: #fff4ee;
  border-radius: 30px;
  margin-bottom: 20px;
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 700;
  color: #f36b21;
  letter-spacing: 0.1em;
}

.process-badge-dot {
  width: 6px;
  height: 6px;
  background: #f36b21;
  border-radius: 50%;
}

.process-main-title {
  color: #10284a;
  font-family: var(--font-head);
  font-size: clamp(32px, 3.5vw, 44px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.process-main-subtitle {
  color: #64748b;
  font-size: 16px;
  line-height: 1.6;
}

.process-timeline-wrapper {
  position: relative;
  width: 100%;
}

.process-timeline-grid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  gap: 20px;
}

.process-timeline-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

.process-step-indicator {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
}

.process-step-icon-box {
  width: 64px;
  height: 64px;
  background: #ffffff;
  border: 1px solid #eef2f6;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10284a;
  box-shadow: 0 4px 15px rgba(16, 40, 74, 0.04);
  position: relative;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.process-step-icon {
  transition: all 0.3s ease;
}

.process-timeline-step:hover .process-step-icon-box {
  transform: translateY(-4px);
  background: #f36b21;
  border-color: #f36b21;
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(243, 107, 33, 0.2);
}

.process-step-connector {
  position: absolute;
  top: 50%;
  left: 64px;
  right: -100%;
  height: 1px;
  background: #e2e8f0;
  z-index: 1;
  transition: background 0.3s ease;
}

.process-timeline-step:hover .process-step-connector {
  background: #f36b21;
}

.process-step-content {
  text-align: left;
  padding-right: 15px;
}

.process-step-title {
  color: #10284a;
  font-family: var(--font-head);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  transition: color 0.3s ease;
}

.process-timeline-step:hover .process-step-title {
  color: #f36b21;
}

.process-step-desc {
  color: #64748b;
  font-size: 15px;
  line-height: 1.6;
}

@media (max-width: 991px) {
  .process-timeline-grid {
    flex-direction: column;
    gap: 40px;
  }
  .process-timeline-step {
    flex-direction: row;
    align-items: flex-start;
  }
  .process-step-indicator {
    flex-direction: column;
    margin-bottom: 0;
    margin-right: 24px;
  }
  .process-step-connector {
    width: 1px;
    height: calc(100% + 40px);
    position: absolute;
    top: 64px;
    left: 31.5px;
    right: auto;
  }
  .process-step-content {
    padding-top: 10px;
    padding-bottom: 0;
  }
}
@media (max-width: 768px) {
  .process-redesign-section {
    padding: 60px 0;
  }
  .process-main-title {
    font-size: 28px;
  }
  .process-step-icon-box {
    width: 54px;
    height: 54px;
    border-radius: 14px;
  }
  .process-step-connector {
    left: 26.5px;
    top: 54px;
  }
}
`;

fs.writeFileSync('app/home.css', css + '\n' + newCSS);
